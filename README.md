![image](https://github.com/northwesttrees-gaming/Tube-Helper/assets/47284617/3290ba3e-033c-45d1-8bed-12ad5f2af8b5)

# Tube Helper
I was looking for a tool that could easily scale the image based on YouTube's thumbnail sizes across their site. I quickly found out that sites were charging for this very simple thing that someone with very little know-how with HTML or simply Google could do for free. So I made this quick and easy HTML page that can scale the "myThumbnail.jpg" file across all thumbnail sizes. There is also alternate thumbnails which can be replaced using Notepad++ replace tool using the video IDs.  
  
Feel free to use this tool how you like, it's open source because something like this should not be charged for IMO.

# Disclaimer
### THIS IS NOT AN OFFICIAL YOUTUBE PRODUCT AND IS NOT APPROVED BY OR ASSOCIATED WITH GOOGLE.

# Tube Helper 2.0 Research
Some interesting stats from my first test for Tube Helper 2.0  
  
Impressions increased by 12% (5.9K to 6.6K)  
Click Through Rate increased by 50% (2.5% to 3.8%)  
Views From Impressions increased by 100% (147 to 249)  
Average View Duration stayed about the same only 10 seconds more. (1:24m to 1:34m)  
Watch Time from impressions increased by 90% (3.47 to 6.52)  

![tube_helper_2 0_data_sheet_01](https://github.com/northwesttrees-gaming/Tube-Helper/assets/47284617/85d00fdc-8945-46e0-8c2d-677b921d6795)


# How To Use
1. Download the files from the resources tab.
2. Open the HTML file with your browser.
    1. Can work online or offline as long as you have a browser.
3. Replace the myThumbnail.jpg with your custom thumbnail.
    1. Make sure that the name and extension (.jpg) are the same.
4. Refresure the page in your browser
    1. This will update the myThumbnail.jpg image in the HTML document.

# Notes
## NOTE 1:
### Online Mode Video Thumbnails
It is now possible to change the thumbnails in the src/javascript/<page_name>.js files.

Similar to before you can change the IDs using this part of the code.

```javascript
  var aNewId = "gzKb-JxjyWQ";
  var bNewId = "zv-TS_mEHE4";
  var cNewId = "RNCwBSPTZiM";
  var dNewId = "V2IhvWpcjVg";
  var eNewId = "j8y-_ts_H8s";
```

aNewId = Thumbnail A "gzKb-JxjyWQ"  
bNewId = Thumbnail B "zv-TS_mEHE4"  
cNewId = Thumbnial C "RNCwBSPTZiM"  
dNewId = Thumbnial D "V2IhvWpcjVg"  
eNewId = Thumbnail E "j8y-_ts_H8s"  

### Offline Thumbnials
Offline Thumbnails are stored under the src/images/thumbnails folder.

## NOTE 2:
Your thumbnail name should be "myThumbnail.jpg"

## NOTE 3:
Your thumbnail should be in the root folder where the src folder and myThumbnial.jpg files are located.  
Replace the myThumbnial.jpg and refresh the page to see the changes across the app.

## NOTE 4:
Themes
You can change the theme using the src/css/dark_theme.css or the light_theme.css files.


# Downloads
You can easily obtain the files needed from the [releases tab](https://github.com/northwesttrees-gaming/YouTube-Thumbnail-Helper/releases).

# Screenshots
### Launcher
![image](https://github.com/northwesttrees-gaming/Tube-Helper/assets/47284617/46b83569-81e2-475a-9435-26d264e77db6)
### Title Helper
![image](https://github.com/northwesttrees-gaming/Tube-Helper/assets/47284617/9df58d0c-e555-43ce-82bd-760c4a05a556)
### Dark Theme
![image](https://github.com/northwesttrees-gaming/Tube-Helper/assets/47284617/e91398a3-c207-49f7-9c4c-5aa7d9ccc8cc)
### Light Theme
![image](https://github.com/northwesttrees-gaming/Tube-Helper/assets/47284617/81ac6b9b-bbbb-4e4a-bf9e-4fccba177d95)

