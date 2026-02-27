sudo apt update -y
sudo apt install -y npm

until npm install; do
    sudo rm -rf ./node_modules
done

npm audit fix
