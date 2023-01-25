# Hello everyone! I want to share with you the wallpaper that I am using
### It is a calendar, which shows in large the day of the week, followed by the day of the year and finally the time.

>Ex: WEDNESDAY, January 25,2023, -11:23-


* Added option to change the image
  * replace Background.png in the bg folder

* Added option to change the main color
  * replace `--main-color` in the css file

* Added option to use neon effect in the day name
  * If you want to use the static glow, uncomment the line what contains `text-shadow: 0 0 5px ...` (currently is the line nº44) and comment the other line.
  * If you want to use the glowing effect, uncomment the line what contains `animation: flicker 1.5s ...` (currently is the line nº48) and comment the other line.
 
* The option to use automatic colors has been added 
  * the last three scripts, `color-thief`, `tinycolor` and `auto-select-color`, must be uncommented
 
 ## Here's the [preview](https://juli-cvidal.github.io/DayName-Wallpaper/): 
<div>
  <img src="/Background Preview.png"/>
 </div>
 
 
 ## If you want to use it, you will need [Wallpaper Engine](https://store.steampowered.com/app/431960/Wallpaper_Engine/)
<ol>
  <li>Clone this repo</li>
  <li>From Wallpaper Engine, click "Open Folder" option and select "Open offline wallpaper"</li>
  <li>Select the index.html file</li>
</ol>
