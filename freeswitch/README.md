# 📦 Step-by-Step Guide: Compiling FreeSWITCH on Debian 13 (with .deb packages)

This document summarizes the corrected workflow we followed to build FreeSWITCH on Debian 13 (trixie/sid) and generate .deb packages, taking into account the issues encountered (missing dependencies, spandsp, sofia-sip, etc.).

---

## 1. Prepare the environment

Install build tools:

```bash
apt-get update
apt-get install -y \
  sudo git build-essential devscripts dpkg-dev equivs fakeroot \
  autoconf automake libtool libtool-bin cmake pkg-config \
  wget curl unzip python-is-python3 python3-all-dev \
  erlang-dev libtpl-dev libgdbm-dev libdb-dev \
  python3-setuptools docbook-xsl xsltproc \
  libglib2.0-dev graphviz dh-make cmake
```

---

## 2. Install FreeSWITCH base dependencies

```bash
apt-get install -y \
  uuid-dev zlib1g-dev libjpeg-dev libsqlite3-dev libcurl4-openssl-dev \
  libpcre2-dev libspeex-dev libspeexdsp-dev libldns-dev libedit-dev \
  libtiff5-dev yasm libopus-dev libsndfile1-dev libavformat-dev \
  libswscale-dev liblua5.2-dev liblua5.2-0 libpq-dev unixodbc-dev \
  libxml2-dev libpq5 sngrep libswresample-dev bison doxygen \
  python3-dev python-is-python3 dh-python libjansson-dev \
  libopencv-dev libhiredis-dev libmemcached-dev libsphinxbase-dev \
  libpocketsphinx-dev libopencore-amrnb-dev libmariadb-dev libperl-dev \
  libgdbm-compat-dev librabbitmq-dev libsnmp-dev libmagickcore-dev \
  libopusfile-dev libmp3lame-dev libshout3-dev libvlc-dev default-jdk mono-mcs \
  libasound2-dev libcodec2-dev python-dev-is-python3
```

> ⚠️ **Note**: Debian 13 no longer includes libpcre3-dev or ntpdate; they are replaced by libpcre2-dev and ntpsec-ntpdate.

---

## 3. Create and install .deb packages for dependencies (compiled)

### spandsp 3.x

```bash
cd /usr/src
git clone https://github.com/freeswitch/spandsp.git
cd spandsp
./bootstrap.sh
./configure

fakeroot debian/rules clean
dpkg-buildpackage -us -uc -b

# Install the newly created package so that it is available as a dependency for FreeSWITCH
cd /usr/src
dpkg -i libspandsp3_3.0.0-42_amd64.deb libspandsp3-dev_3.0.0-42_amd64.deb
apt-get install -f -y
```

### libks2

```bash
cd /usr/src
git clone https://github.com/signalwire/libks.git
cd libks

mkdir debian
cd debian
touch control rules changelog copyright

cd /usr/src/libks
cat > debian/control <<'EOF'
Source: libks
Section: libs
Priority: optional
Maintainer: Rodrigo Cuadra <rcuadra@aplitel.com>
Build-Depends: debhelper-compat (= 13), cmake, libpcre2-dev, uuid-dev
Standards-Version: 4.6.2
Homepage: https://github.com/signalwire/libks

Package: libks2
Architecture: any
Depends: ${shlibs:Depends}, ${misc:Depends}
Description: SignalWire libks library
 A library for communication protocols developed by SignalWire.

Package: libks2-dev
Architecture: any
Depends: libks2 (= ${binary:Version}), ${misc:Depends}
Description: Development files for libks
 Development headers and libraries for libks.
EOF

cat > debian/rules <<'EOF'
#!/usr/bin/make -f
%:
	dh $@

override_dh_auto_configure:
	cmake -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_BUILD_TYPE=Release .

override_dh_auto_install:
	dh_auto_install --destdir=debian/tmp

override_dh_auto_clean:
	dh_clean

override_dh_installdocs:
	dh_installdocs
	dh_installdocs -plibks2-dev --link-doc=libks2
EOF
chmod +x debian/rules

cat > debian/changelog <<'EOF'
libks (2.0-7) unstable; urgency=medium

   * Initial packaging with proper multiarch support.

  -- Rodrigo Cuadra <rcuadra@aplitel.com>  Mon, 08 Sep 2025 20:30:00 +0000
EOF

cat > debian/copyright <<'EOF'
Format: https://www.debian.org/doc/packaging-manuals/copyright-format/1.0/
Files: *
Copyright: 2025 SignalWire, Inc.
License: MPL-1.1 or GPL-2+

License: MPL-1.1 or GPL-2+
 This program is dual licensed under MPL 1.1 or GPL 2.0.
 On Debian systems, the complete text of the GNU General Public License
 version 2 can be found in /usr/share/common-licenses/GPL-2.
EOF

cat > debian/not-installed <<'EOF'
usr/share/doc/libks2/changelog.Debian.gz
usr/share/doc/libks2/copyright
EOF

cat > debian/libks2.install <<'EOF'
usr/lib/libks2.so*
EOF

cat > debian/libks2-dev.install <<'EOF'
usr/include/libks2/*
usr/lib/pkgconfig/libks2.pc
EOF

rm -rf obj-x86_64-linux-gnu CMakeCache.txt CMakeFiles
fakeroot debian/rules clean
dpkg-buildpackage -us -uc -b

# Install the newly created package so that it is available as a dependency for FreeSWITCH
cd /usr/src
dpkg -i libks2_*.deb libks2-dev_*.deb
apt-get install -f -y
```

### sofia-sip

```bash
cd /usr/src
git clone https://github.com/freeswitch/sofia-sip.git
cd sofia-sip
./bootstrap.sh
./configure

fakeroot debian/rules clean
dpkg-buildpackage -us -uc -b

# Install the newly created package so that it is available as a dependency for FreeSWITCH
cd /usr/src
dpkg -i libsofia-sip-ua0_*.deb libsofia-sip-ua-dev_*.deb sofia-sip-bin_*.deb
apt-get install -f -y
```

### libbroadvoice

```bash
cd /usr/src
git clone https://github.com/freeswitch/libbroadvoice.git
cd libbroadvoice
./autogen.sh
./configure

fakeroot debian/rules clean
dpkg-buildpackage -us -uc -b

# Install the newly created package so that it is available as a dependency for FreeSWITCH
cd /usr/src
dpkg -i libbroadvoice1_*.deb libbroadvoice-dev_*.deb
apt-get install -f -y
```

### signalwire

```bash
cd /usr/src
git clone https://github.com/signalwire/signalwire-c.git
cd signalwire-c

mkdir debian
cd debian
touch control rules changelog copyright

cd /usr/src/signalwire-c
cat > debian/control <<'EOF'
Source: signalwire-c
Section: libs
Priority: optional
Maintainer: Tu Nombre <tu.email@ejemplo.com>
Build-Depends: debhelper-compat (= 13), cmake, libks2-dev, uuid-dev, libpcre2-dev, libssl-dev, libjansson-dev
Standards-Version: 4.6.2
Homepage: https://github.com/signalwire/signalwire-c

Package: signalwire-client-c2
Architecture: any
Depends: ${shlibs:Depends}, ${misc:Depends}, libks2
Description: SignalWire C client library (version 2)
 A C library for SignalWire communication protocols.

Package: signalwire-client-c2-dev
Architecture: any
Depends: signalwire-client-c2 (= ${binary:Version}), ${misc:Depends}, libks2-dev
Description: Development files for SignalWire C client library (version 2)
 Development headers and libraries for signalwire-client-c2.
EOF

cat > debian/rules <<'EOF'
#!/usr/bin/make -f
%:
	dh $@

override_dh_auto_configure:
	cmake -DCMAKE_INSTALL_PREFIX=/usr \
	      -DCMAKE_BUILD_TYPE=Release \
	      -DBUILD_SHARED_LIBS=ON \
	      -DINSTALL_PKGCONFIG_DIR=/usr/lib/$(DEB_HOST_MULTIARCH)/pkgconfig .

override_dh_auto_install:
	dh_auto_install --destdir=debian/tmp

override_dh_auto_test:
	: # Skip tests temporarily

override_dh_auto_clean:
	dh_clean

override_dh_installdocs:
	dh_installdocs
	dh_installdocs -psignalwire-client-c2-dev --link-doc=signalwire-client-c2
EOF
chmod +x debian/rules

cat > debian/not-installed <<'EOF'
usr/share/doc/signalwire-client-c2/changelog.Debian.gz
usr/share/doc/signalwire-client-c2/copyright
EOF

cat > debian/signalwire-client-c2.install <<'EOF'
usr/lib/libsignalwire_client2.so.2
usr/lib/libsignalwire_client2.so
EOF

cat > debian/signalwire-client-c2-dev.install <<'EOF'
usr/include/signalwire-client-c2/*
usr/lib/pkgconfig/signalwire_client2.pc
EOF

cat > debian/changelog <<'EOF'
signalwire-c (1.0-13) unstable; urgency=medium

  * Initial packaging for SignalWire C library.

 -- Rodrigo Cuadra <rcuadra@aplitel.com>  Mon, 08 Sep 2025 22:00:00 +0000

EOF

cat > debian/copyright <<'EOF'
Format: https://www.debian.org/doc/packaging-manuals/copyright-format/1.0/
Files: *
Copyright: 2025 SignalWire, Inc.
License: MPL-1.1 or GPL-2+

License: MPL-1.1 or GPL-2+
 This program is dual licensed under MPL 1.1 or GPL 2.0.
 On Debian systems, the complete text of the GNU General Public License
 version 2 can be found in /usr/share/common-licenses/GPL-2.
EOF

rm -rf obj-x86_64-linux-gnu CMakeCache.txt CMakeFiles
fakeroot debian/rules clean
dpkg-buildpackage -us -uc -b

# Install the newly created package so that it is available as a dependency for FreeSWITCH
cd /usr/src
dpkg -i signalwire-client-c2_*.deb signalwire-client-c2-dev_*.deb
apt-get install -f -y
```
---

## 4. Clone FreeSWITCH and prepare packaging

```bash
cd /usr/src
git clone -b master https://github.com/signalwire/freeswitch.git
cd freeswitch

# Generate configure
./bootstrap.sh -j
./configure \
  --enable-core-odbc-support \
  --enable-core-pgsql-support \
  --enable-pcre2 \
  --prefix=/usr \
  --sysconfdir=/etc \
  --localstatedir=/var
```

> This creates the files debian/control, debian/rules, debian/modules_.conf, etc.

---

## 5. Build .deb packages

```bash
# Exclude conflicting modules in Debian 13: mod_v8, mod_basic, mod_flite, mod_ilbc, mod_silk, mod_managed
cd /usr/src/freeswitch/debian
sed -i '/xml_int\/mod_xml_ldap/a\  languages/mod_v8\n  languages/mod_basic\n  asr_tts/mod_flite\n  codecs/mod_ilbc\n  codecs/mod_silk\n  languages/mod_managed' bootstrap.sh

# Generate debian/ structure
cd /usr/src/freeswitch/debian
./bootstrap.sh

# Remove dependencies not built due to incompatibility with Debian 13
sed -i '/freeswitch-meta-codecs (= ${binary:Version}),/d' control
sed -i '/freeswitch-music,/d' control
sed -i '/freeswitch-sounds,/d' control
sed -i '/freeswitch-mod-flite (= ${binary:Version}),/d' control

# Update the FreeSWITCH version in changelog
cat > changelog <<'EOF'
freeswitch (1.10.13-1) unstable; urgency=medium

  * Repackage FreeSWITCH 1.10.13 for Debian 13.
  * Removed obsolete dependencies (flite, silk, ilbc, etc).
  * Adjusted modules to reflect available codecs and system libraries.
  * Local packaging for testing repository.

 -- Rodrigo Cuadra <rcuadra@aplitel.com>  Tue, 10 Sep 2025 20:30:00 +0000
EOF

cd /usr/src/freeswitch
fakeroot debian/rules clean
rm -rf debian/python-esl-dbg
rm -rf debian/libfreeswitch1-dbg

make clean
dpkg-buildpackage -us -uc -b -d
```

This generates multiple .deb packages in /usr/src/, for example:

* `freeswitch_1.10.13-1_amd64.deb`
* `libfreeswitch1_1.10.13-1_amd64.deb`
* `freeswitch-meta-all_1.10.13-1_amd64.deb`
* etc.

---

## 6. Create a local repository 
1. Install reprepro
```bash
apt-get install -y reprepro
```

2. Create folder structure
```bash
mkdir -p /repo/deb/freeswitch-repo/{conf,dists,pool}
```

3. Create configuration file
```bash
cat > /repo/deb/freeswitch-repo/conf/distributions <<'EOF'
Origin: FreeSWITCH
Label: FreeSWITCH Custom Repo
Codename: unstable
Architectures: amd64
Components: main
Description: FreeSWITCH custom packages
EOF
```

4. Import your .deb packages into the repository
```bash
cd /repo/deb/freeswitch-repo/
reprepro includedeb unstable /usr/src/*.deb
```
This automatically:
Creates the structure pool/main/f/freeswitch/, pool/main/libb/, etc.
Generates dists/unstable/main/binary-amd64/Packages.gz

5. Use the repo on the same machine
Add a .list file:
```bash
echo "deb [trusted=yes] file:/repo/deb/freeswitch-repo unstable main" \
  > /etc/apt/sources.list.d/freeswitch-local.list
```

6. Refresh apt
```bash
apt-get update
```

7. Install FreeSWITCH
Once the repository is configured and apt has been refreshed, you can install FreeSWITCH and the desired modules with:
```bash
apt install -y freeswitch freeswitch-meta-all freeswitch-mod-pgsql freeswitch-mod-cdr-pg-csv freeswitch-mod-odbc-cdr
```
✅ This will pull FreeSWITCH and its dependencies directly from your local repository (/repo/deb/freeswitch-repo).

8. Install other required modules
After installing the core packages, you can add individual modules depending on your use case. For example:
```bash
apt install freeswitch-mod-opus freeswitch-mod-codec2 freeswitch-mod-g729 freeswitch-mod-g723-1
```
✅ This way you can pick only the modules you really need (codecs, endpoints, applications).
💡 Remember that each module is packaged separately (freeswitch-mod-*) because of the Debian packaging model you generated

9. Check FreeSWITCH version
```bash
freeswitch -version
fs_cli -V
```
---

# 📦 Ring2All Debian Repository Setup

This guide explains how to set up an **external Debian repository** for **Ring2All FreeSWITCH packages**, hosted at `repo.vitalpbx.com`.
It includes two scripts:

* `ReleaseBuilderRing2All` → Generates a Debian repository Release file with metadata and cryptographic checksums (MD5, SHA1, SHA256) for all repository files, which is later signed with GPG for APT package verification.
* `BuildRepoRing2All` → Creates the full directory structure, package indexes, compressed metadata, and signed Release/InRelease files for the multi-component Ring2All Debian repository (audios, base, core, extras, devel) using a specified GPG key.

## 1. Install Dependence
```bash
apt-get install -y apt-utils devscripts
```

---
## 2. Create the ReleaseBuilderRing2All script

```bash
cat > /usr/sbin/ReleaseBuilderRing2All <<'EOF'
#!/bin/bash
set -e

while getopts o:l:s:d:c:a: flag
do
    case "${flag}" in
        o) ORIGIN=${OPTARG};;
        l) LABEL=${OPTARG};;
        s) SUITE=${OPTARG};;
        d) DESC=${OPTARG};;
        c) COMP=${OPTARG};;
        a) ARCH=${OPTARG};;
    esac
done

ORIGIN=${ORIGIN:-"Ring2All Repo"}
LABEL=${LABEL:-Base}
SUITE=${SUITE:-stable}
DESC=${DESC:-"Main Ring2All dependencies"}
COMP=${COMP:-main}
ARCH=${ARCH:-"amd64 arm64 arm7"}

do_hash() {
    HASH_NAME=$1
    HASH_CMD=$2
    echo "${HASH_NAME}:"
    for f in $(find -type f); do
        f=$(echo $f | cut -c3-) # remove ./ prefix
        if [ "$f" = "Release" ]; then
            continue
        fi
        echo " $(${HASH_CMD} ${f} | cut -d' ' -f1) $(wc -c < $f) $f"
    done
}

cat << EOT
Origin: ${ORIGIN}
Label: ${LABEL}
Suite: ${SUITE}
Codename: ${SUITE}
Version: 1.0
Architectures: ${ARCH}
Components: ${COMP}
Description: ${DESC}
Date: $(date -Ru)
EOT
do_hash "MD5Sum" "md5sum"
do_hash "SHA1" "sha1sum"
do_hash "SHA256" "sha256sum"
EOF

chmod +x /usr/sbin/ReleaseBuilderRing2All
```

---
## 3. Create the BuildRepoRing2All script

```bash
cat > /usr/sbin/BuildRepoRing2All <<'EOF'
#!/bin/bash
set -e

PROJECT_DIR=/var/www/pbx-repo/ring2all/trixie
GPG_KEY="D899B67676A5D2D408C5E30EA4B1437798E981B7"

# Build directories
echo "Build Directories"
mkdir -p ${PROJECT_DIR}
mkdir -p ${PROJECT_DIR}/apt/{gpgkey,base,core,extras,devel,audios}
mkdir -p ${PROJECT_DIR}/apt/{audios/dists/stable/main/binary-amd64,base/dists/stable/main/binary-amd64,core/dists/stable/main/binary-amd64,extras/dists/stable/main/binary-amd64,devel/dists/stable/main/binary-amd64}
mkdir -p ${PROJECT_DIR}/apt/{audios/dists/stable/main/binary-all,base/dists/stable/main/binary-all,core/dists/stable/main/binary-all,extras/dists/stable/main/binary-all,devel/dists/stable/main/binary-all}
mkdir -p ${PROJECT_DIR}/apt/{audios/dists/stable/main/binary-arm64,base/dists/stable/main/binary-arm64,core/dists/stable/main/binary-arm64,extras/dists/stable/main/binary-arm64,devel/dists/stable/main/binary-arm64}
mkdir -p ${PROJECT_DIR}/apt/{audios/dists/stable/main/binary-armhf,base/dists/stable/main/binary-armhf,core/dists/stable/main/binary-armhf,extras/dists/stable/main/binary-armhf,devel/dists/stable/main/binary-armhf}

mkdir -p ${PROJECT_DIR}/apt/pool/{a/audios,b/base,c/core,e/extras,d/devel}
mkdir -p ${PROJECT_DIR}/apt/{base/pool,core/pool,extras/pool,devel/pool,audios/pool}

#Build Virtual Links
echo "Build some virtual links"
ln -sf ${PROJECT_DIR}/apt/pool/a ${PROJECT_DIR}/apt/audios/pool/
ln -sf ${PROJECT_DIR}/apt/pool/b ${PROJECT_DIR}/apt/base/pool/
ln -sf ${PROJECT_DIR}/apt/pool/c ${PROJECT_DIR}/apt/core/pool/
ln -sf ${PROJECT_DIR}/apt/pool/e ${PROJECT_DIR}/apt/extras/pool/
ln -sf ${PROJECT_DIR}/apt/pool/d ${PROJECT_DIR}/apt/devel/pool/

# Copy public key
echo "Setting up public key"
rm -f ${PROJECT_DIR}/apt/gpgkey/ring2all.gpg
cp ~/ring2all.gpg ${PROJECT_DIR}/apt/gpgkey/

# Configure GPGKEY folder
echo "Options -Indexes" > ${PROJECT_DIR}/apt/gpgkey/.htaccess;

echo "Insalling script for repo setup"
rm -f ${PROJECT_DIR}/apt/ring2all_setup_repo
cp ~/ring2all_setup_repo ${PROJECT_DIR}/apt/setup_repo

# Generate Packages files
echo "Generating Packages Files"

cd  ${PROJECT_DIR}/apt

dpkg-scanpackages --arch amd64 pool/a/audios/ > audios/dists/stable/main/binary-amd64/Packages
dpkg-scanpackages --arch all pool/a/audios/ > audios/dists/stable/main/binary-all/Packages
dpkg-scanpackages --arch arm64 pool/a/audios/ > audios/dists/stable/main/binary-arm64/Packages
dpkg-scanpackages --arch armhf pool/a/audios/ > audios/dists/stable/main/binary-armhf/Packages
dpkg-scanpackages --arch amd64 pool/b/base/ > base/dists/stable/main/binary-amd64/Packages
dpkg-scanpackages --arch all pool/b/base/ > base/dists/stable/main/binary-all/Packages
dpkg-scanpackages --arch arm64 pool/b/base/ > base/dists/stable/main/binary-arm64/Packages
dpkg-scanpackages --arch armhf pool/b/base/ > base/dists/stable/main/binary-armhf/Packages
dpkg-scanpackages --arch amd64 pool/c/core/ > core/dists/stable/main/binary-amd64/Packages
dpkg-scanpackages --arch all pool/c/core/ > core/dists/stable/main/binary-all/Packages
dpkg-scanpackages --arch arm64 pool/c/core/ > core/dists/stable/main/binary-arm64/Packages
dpkg-scanpackages --arch armhf pool/c/core/ > core/dists/stable/main/binary-armhf/Packages
dpkg-scanpackages --arch amd64 pool/e/extras/ > extras/dists/stable/main/binary-amd64/Packages
dpkg-scanpackages --arch all pool/e/extras/ > extras/dists/stable/main/binary-all/Packages
dpkg-scanpackages --arch arm64 pool/e/extras/ > extras/dists/stable/main/binary-arm64/Packages
dpkg-scanpackages --arch armhf pool/e/extras/ > extras/dists/stable/main/binary-armhf/Packages
dpkg-scanpackages --arch amd64 pool/d/devel/ > devel/dists/stable/main/binary-amd64/Packages
dpkg-scanpackages --arch all pool/d/devel/ > devel/dists/stable/main/binary-all/Packages
dpkg-scanpackages --arch arm64 pool/d/devel/ > devel/dists/stable/main/binary-arm64/Packages
dpkg-scanpackages --arch armhf pool/d/devel/ > devel/dists/stable/main/binary-armhf/Packages

# Compresing Packages files (You can generate all the Packages.gz in a single loop:)
echo "Compresing Packages Files"
for section in audios base core extras devel; do
  for arch in amd64 all arm64 armhf; do
    DIR=${PROJECT_DIR}/apt/${section}/dists/stable/main/binary-${arch}
    if [ -f "${DIR}/Packages" ]; then
      echo "Compressing ${section} for ${arch}..."
      gzip -9c "${DIR}/Packages" > "${DIR}/Packages.gz"
    fi
  done
done

#Build Release files
echo "Build Release Files"

cd ${PROJECT_DIR}/apt/audios/dists/stable/
/usr/sbin/ReleaseBuilderRing2All -o 'Ring2All Repo' -l Audios -d 'Freeswitch Audios' -a all > Release
rm -f Release.gpg
gpg -u "$GPG_KEY" -abs -o Release.gpg Release
cat Release | gpg -u "$GPG_KEY" -abs --clearsign > InRelease

cd ${PROJECT_DIR}/apt/base/dists/stable/
/usr/sbin/ReleaseBuilderRing2All -o 'Ring2All Repo' -l Base -d 'Ring2All Base' -a all > Release
rm -f Release.gpg
gpg -u "$GPG_KEY" -abs -o Release.gpg Release
cat Release | gpg -u "$GPG_KEY" -abs --clearsign > InRelease

cd ${PROJECT_DIR}/apt/core/dists/stable/
/usr/sbin/ReleaseBuilderRing2All -o 'Ring2All Repo' -l Core -d 'Core Ring2All Packages' -a all > Release
rm -f Release.gpg
gpg -u "$GPG_KEY" -abs -o Release.gpg Release
cat Release | gpg -u "$GPG_KEY" -abs --clearsign > InRelease

cd ${PROJECT_DIR}/apt/extras/dists/stable/
/usr/sbin/ReleaseBuilderRing2All -o 'Ring2All Repo' -l Extras -d 'Add-on Ring2All Packages' -a all > Release
rm -f Release.gpg
gpg -u "$GPG_KEY" -abs -o Release.gpg Release
cat Release | gpg -u "$GPG_KEY" -abs --clearsign > InRelease

cd ${PROJECT_DIR}/apt/devel/dists/stable/
/usr/sbin/ReleaseBuilderRing2All -o 'Ring2All Repo' -l Devel -d 'Packages for testing purpose' -a all > Release
rm -f Release.gpg
if gpg --list-keys "$GPG_KEY" >/dev/null 2>&1; then
    gpg -u "$GPG_KEY" -abs -o Release.gpg Release
    cat Release | gpg -u "$GPG_KEY" -abs --clearsign > InRelease
else
    echo "⚠️  WARNING: GPG key $GPG_KEY not found. Skipping signing."
fi

# Done
echo "Done!!"
EOF

chmod +x /usr/sbin/BuildRepoRing2All
```

---

## 4. **Add `.deb` packages:**

  ```bash
  cp /usr/src/*.deb /var/www/pbx-repo/ring2all/apt/main/pool/main/r/ring2all/
  ```

* **Rebuild the repo:**

  ```bash
  BuildRepoRing2All
  ```

## 5. **Client installation script:**

1. Instalar dependencias GPG
Asegúrate de tener instalado el paquete gnupg para poder manejar las llaves:

```bash
apt-get update
apt-get install -y wget curl gpg
```

2. Importar setup_repo
Descarga setup_repo desde el repositorio recien creado.
```bash
wget https://repo.vitalpbx.com/ring2all/trixie/apt/setup_repo
```
Esto guarda la llave en el keyring de APT en /usr/share/keyrings.

3. Ejecutar setup_repo
Crea un .list en el cliente para apuntar al repo de Ring2All:
```bash
chmod +x setup_repo
./setup_repo
```

4. Actualizar índices (opcional)
Refresca APT para que lea los paquetes de tu repo:
```bash
apt-get update
```

5. Install Freeswitch
```bash
apt install -y freeswitch freeswitch-meta-all freeswitch-mod-pgsql freeswitch-mod-cdr-pg-csv freeswitch-mod-odbc-cdr sofia-sip-bin
```
---

✅ After this, your repo will follow a proper Debian layout (`pool/main/r/ring2all`, `dists/stable/main/...`) and will be ready for clients to consume.

---
## 6. Adjust systemd service

Connection Test and Reload systemd:
```bash
sudo -u freeswitch /usr/bin/freeswitch -ncwait -nonat -c
```
```bash
/usr/bin/freeswitch -ncwait -nonat -c
systemctl daemon-reload
systemctl enable freeswitch
systemctl start freeswitch
```
---

## ✅ Expected Result

In the end you should have:
- ✅ All `.deb` packages for FreeSWITCH 1.10.13 built and installed on Debian 13.  
- ✅ A local repository managed with `reprepro`, with the standard Debian structure.
---

# Final Notes – FreeSWITCH on Debian 13

## ✅ Debian 13 Compatibility
FreeSWITCH **1.10.13** compiles fine on Debian 13, but some modules are **deprecated or incompatible**:
- ❌ Not available: `mod_v8`, `mod_basic`, `mod_flite`, `mod_ilbc`, `mod_silk`, `mod_managed`.
- ✅ Modern codecs supported: **G.711, G.722, Opus, G.729, CODEC2, GSM, G.726**.

---

## 📦 External Dependencies Rebuilt as `.deb`
To keep the build clean and reproducible, the following were rebuilt and installed from source:
- `spandsp`
- `libks2`
- `sofia-sip`
- `libbroadvoice`
- `signalwire-c`
- `libv8`

---

## 📂 Local APT Repository
Using **`reprepro`**, a proper **Debian-style repository** was created with:
- `pool/` and `dists/` structure.
- Auto-generated `Packages.gz` index.
- Works exactly like an official Debian repository.

**Benefits:**
- Centralized repo for your servers.
- Easy upgrades with `apt-get upgrade`.
- Clean separation of custom vs. system packages.
- Fully reproducible build environment.

---

## ⚙️ Systemd Service
FreeSWITCH service adjusted to:
- Run as **user/group `freeswitch`**.
- Config lives in `/etc/freeswitch`.
- ✔ Starts automatically after installation.

---

## 🔄 Workflow Summary
1. Build **external dependencies** as `.deb`.
2. Build **FreeSWITCH + modules** as `.deb`.
3. Import into local repo with **`reprepro`**.
4. Install via:
   ```bash
   apt install freeswitch freeswitch-meta-all ...
   ```
5. Test with:
```bash
fs_cli -x "status"
fs_cli -x "show codecs"
```

---

🎯 Expected Result
- ✔ FreeSWITCH runs smoothly on Debian 13.
- ✔ Local APT repo provides reproducible builds.
- ✔ Modern codecs like Opus, G.729, CODEC2 are available.
- ✔ Service runs automatically with correct permissions.

---
