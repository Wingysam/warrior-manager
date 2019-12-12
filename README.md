# Manager
Manage several ArchiveTeam Warrior instances that are managed by Docker Compose

## [I built this very quickly. It is hacky.](https://wakatime.com/@6682dd69-77b0-4754-a453-b4337e388f15/projects/dyzwzokhxo?start=2019-12-11&end=2019-12-11)

## Install
```bash
cd *your docker-compose file directory*
git clone https://github.com/Wingysam/warrior-manager.git
cd warrior-manager
npm install
```

## Run
```bash
# Working directory MUST be the warrior-manager directory, which MUST be inside your docker-compose.yml's directory.
node index.js
```