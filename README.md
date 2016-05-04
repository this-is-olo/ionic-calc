# ionic-calc

Dependencies:
=============
AndroidSDK
----------
Install <a href="http://developer.android.com/sdk/installing/index.html">Android Studio</a>. It comes with sdk.
<br>
Also add path variable:
<br>
export ANDROID_HOME={PATH}:"/home/username/Android/Sdk/"
<br>
export PATH=${PATH}:"/home/username/Android/Sdk/tools"
<br>
export PATH=${PATH}:"/home/username/Android/Sdk/platform-tools"
<br>
<br>
node.js
-------
sudo apt-get install node
cordova
-------
sudo npm install -g cordova
concurrently
------------
sudo npm install -g concurrently
lite-server
-----------
sudo npm install -g lite-server
typescript
----------
sudo npm install -g typescript

Starting the app:
=================

Run from app dir: <br> ionic serve calc
<br>
<br>
Build for android
-----------------

First to add the platform run from app dir: <br> ionic platform add android. <br><br>
Then to build run: <br> ionic build android.<br>

Make sure you have Android SDK and PATH set up correcrly!
