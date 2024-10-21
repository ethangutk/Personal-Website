<h6 >
	<a href="https://github.com/ethangtkt">↩ Back To ethangtkt's Profile</a>
</h6>
<h1 align="center">🤵 Personal Website</h1><br>
<table align="center">
	<tr>
		<th>
			Directory
		</th>
	</tr>
	<tr>
		<td>
			<a href="#ℹ-about-the-project">ℹ About The Project</a><br><br>
			<a href="#-site--features">📃 Site  Features</a>
			<ul>
				<li><a href="#-aws-hosting">🔌 AWS Hosting</a></li>
				<li><a href="#-https">🔒 HTTPS</a></li>
				<li><a href="#-html-css-javascript">🏗 HTML, CSS, Javascript</a></li>
				<li><a href="#-bootstrap">📐 Bootstrap</a></li>
				<li><a href="#%EF%B8%8F-animations">🏃‍♂️ Animations</a></li>
				<li><a href="#-theme">🎨 Theme</a></li>
				<li><a href="#-metadata">🎛 Metadata</a></li>
			</ul>
			<a href="#-the-final-product">🏁 The Final Product</a><br><br>
		</td>
  	</tr>
	<tr>
		<td align="center">
			<a href="https://vscode.dev/github.com/ethangtkt/Personal-Website">🔍 Explore the source code directly in<br>the browser using VSCode!</a>
		</td>
	</tr>

</table><br>
<br><br>

## ℹ About The Project
Making my website has always been on my mind since I enrolled in computer science at Miami. However, I just recently felt I had the skills to do so. A month before I started development, I got my AWS SAA certification which covers a lot of cloud computing implementations, one of those implementations being able to host and create a secure connection to a static website. With this in the back of my mind throughout my studies, I got a sudden surge of motivation to start this new project after passing the AWS SAA exam. I wanted the website to be all on one page where everyone could get all of the website's information in under 30 seconds, dynamic enough to catch people's eye with the color scheme and the design and to have the functionality to work on mobile devices. Overall, the entire development process took about two weeks with ~40 hours of total work time, including learning more about HTML, CSS, and Javascript.


<br><br><br>
## 📃 Site  Features
### 🔌 AWS Hosting
The motivation for this project was the new knowledge about the easiness of hosting static websites using AWS services. I hosted my website using a public AWS S3 bucket under my account. Since I bought my domain a while back using google, I decided to use Google Domains rather than Route 53 for hosting. The S3 bucket and Google Domains created an HTTP connection, which benefited the testing since I could test on mobile devices and desktops. The domain costs me about $12.00 annually, and storing it on an S3 bucket only costs me ~$0.50 monthly. Overall, it’s a very streamlined and cheap way to allow your static website to go live quickly.

<p align="center">
  <img src="https://github.com/ethangtkt/Personal-Website/blob/main/Images/S3Bucket.png?raw=true">
  <img src="https://github.com/ethangtkt/Personal-Website/blob/main/Images/GoogleDomains.png?raw=true">
</p>


<br><br>
### 🔒 HTTPS
As explained above, I had an HTTP connection until I 100% finished the website. Then, when it came time to make it an HTTPS connection, I used AWS CloudFront as the middleman between the S3 bucket and the user. Cloud front caches your website in edge locations/data centers around the country, allowing the user a faster connection to your content. In addition, it gives the cache data a TTL of one day, thus only making it suitable for data that doesn’t change very rapidly - hence why I waited to do this step until the end of development. Also, having an HTTPS connection helps Google’s SE algorithm find my website. So, in short, the user connects to Google Domains DNS service that hosts my website, which securely connects them to a CloudFront edge location, and then CloudFront connects to the S3 bucket to gain the content (if it doesn’t already have it cached). You’re probably wondering about the cost. Free.

<p align="center">
  <img src="https://github.com/ethangtkt/Personal-Website/blob/main/Images/CloudFront.png?raw=true">
</p>


<br><br>
### 🏗 HTML, CSS, Javascript
Ah, yes, the famous trio. These three languages are the foundation of my website. I relied heavily on CSS to create that fantastic look that it has. I tried to push myself to give it a 3D look using CSS’s transform property. I used Brackets as my IDE to edit since it has a pretty impressive live edit view as you type for front-end development. 


<br><br>
### 📐 Bootstrap
Though I did not heavily rely on bootstrap because I wanted to make it as custom as possible, I did use it at points where it helped me with the more minor issues so I could focus on more significant ideas. For example, I didn’t want to spend time writing my CSS to create a dynamically structured website for mobile and desktop users. Thus I used Bootsrap’s container, row, and column classes to do the job for me. So, in summary, I made minor amendments to my code using bootstrap, but I coded in CSS for all of the more custom stuff I created. [View more info here!](https://getbootstrap.com/)

<br><br>
### 🏃‍♂️ Animations
Animations are a relatively newer topic for me. I learned animations six months before the start of this project, and they're so fascinating to me. They are the sole reasons why I enjoy developing on the front end for websites. Mainly, I used CSS keyframes to create the Intro Animation and some other minor ones you see throughout the website. Animations that appear as you scroll are combined using Javascript to track the scroll bar progress and add and remove CSS classes to HTML elements. I have two broad CSS classes that fade in a component when activated and hide a component t when unfocused. Very consistent stuff for most parts of my website but for the Education image, I used a custom class under a similar format. For example:

```css
/*Transparent*/
.fadeIn {
    opacity: 0%;
    transform: translateY(-30px) translateX(-30px);
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier();
}
/*Showing*/
.fadeIn.active {
    opacity: 100%;
    transform: translateY(0px) translateX(0px);
    transition-delay: calc(var(--delay) + 0.3s);
    transition-duration: 0.9s;
    transition-timing-function: cubic-bezier();
}
```

<br><br>
### 🎨 Theme
I created the overall structure blindly. Once the website started to take shape, I started experimenting with different colors and ways to display content. I decided on a color scheme representing a sunset since it’s easy on the eye, bright and vibrant, and not stand loutish. I decided to create a 3D look after watching CSS tutorials on YouTube. With that combination, the result is a bright, 3D, dynamic environment. [View the entire color scheme inspiration here](https://www.schemecolor.com/sunset-tones.php).
<p align="center">
  <img src="https://github.com/ethangtkt/Personal-Website/blob/main/Images/ColorScheme.png?raw=true">
</p>

<br><br>
### 🎛 Metadata
This is the most critical part of this website. Metadata allows for polished sharing. I discovered how to make a website's metadata more efficient for sharing. I added fields for Twitter, iMessage sharing, generic link sharing, apple home screen icons, fav icons, and descriptions. It might have overdone it a bit, but this allowed me to show off my website while not being on it. In addition, it gives more opportunities to catch people's attention. You can find all metadata in the <head> section of the HTML document.

<p align="center">
  <img src="https://github.com/ethangtkt/Personal-Website/blob/main/Images/MetaDataPreview.png?raw=true">
</p>

<br><br><br><br>

## 🏁 The Final Product

<br>
<h3 align="center">
View the full website here: <a href="https://www.ethangtkt.com/"> www.ethangtkt.com </a>
</h3>
<br>

<p align="center">
  <img src="https://github.com/ethangtkt/Personal-Website/blob/main/Images/PreviewOne.png?raw=true">
  <img src="https://github.com/ethangtkt/Personal-Website/blob/main/Images/PreviewTwo.png?raw=true">
  <img src="https://github.com/ethangtkt/Personal-Website/blob/main/Images/PreviewThree.png?raw=true">
</p>
<br><br><br>

- - - -
<h6 align="center">
	<a align="center" href="#-back-to-ethangtkts-profile">⬆ Back To The Top </a>
</h6>

- - - -

<h6 align="center">
	<a href="https://github.com/ethangtkt">↩ Back To ethangtkt's Profile</a>
</h6>

- - - -

<h6 align="center">
  Copyright © ethangtkt 2022
</h6>







