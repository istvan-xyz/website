# Creating an encrypted Time Machine disk on ExFAT

```sh
hdiutil create -stdinpass -encryption "AES-256" -size 500g -type SPARSEBUNDLE -fs "HFS+J" YourImage.sparsebundle
```

Where YourImage is the name you want to give your backup image and 500g is the maximum size of your disk image.

```sh
open YourImage.sparsebundle
```

```sh
diskutil list
```

<p>Find your mounted image in the list and get it's path, in my case it was:  /dev/disk3s2</p>

```sh
sudo diskutil enableOwnership /dev/disk3s2
```

```sh
sudo tmutil setdestination /Volumes/YourImage
```

References:

-   http://hints.macworld.com/article.php?story=20140415132734925
-   http://garretthoneycutt.com/index.php/MacOSX#Creating_an_encrypted_sparsebundle
-   https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man1/hdiutil.1.html
