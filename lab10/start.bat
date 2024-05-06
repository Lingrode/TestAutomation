start cmd /k java -jar selenium-server-4.20.0.jar hub
timeout /t 5

start cmd /k java -Dwebdriver.chrome.driver="D:\Univer\4 kurs\chromedriver-win64\chromedriver.exe" -jar selenium-server-4.20.0.jar node --hub http://localhost:4444 --port 5555 --config nodeconfig.toml
timeout /t 5

start cmd /k java -jar selenium-server-4.20.0.jar node --hub http://localhost:4444 --port 6666 --config nodeconfig.toml
timeout /t 5
