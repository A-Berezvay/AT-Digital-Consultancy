<?php
include 'parsedown/Parsedown.php';

// Directories
$mdDir = __DIR__ . '/blog_md/';
$htmlDir = __DIR__ . '/blog_html/';

// Initialize Parsedown
$Parsedown = new Parsedown();

// Scan the markdown directory for files
$mdFiles = scandir($mdDir);
$posts = [];

foreach ($mdFiles as $mdFile) {
    if (pathinfo($mdFile, PATHINFO_EXTENSION) == 'md') {
        // Read the Markdown file
        $markdownContent = file_get_contents($mdDir . $mdFile);

        // Convert Markdown to HTML
        $htmlContent = $Parsedown->text($markdownContent);

        // Create an HTML file
        $slug = pathinfo($mdFile, PATHINFO_FILENAME);
        $htmlFilename = $slug . '.html';
        $htmlFile = fopen($htmlDir . '/' . $htmlFilename, 'w');

        // Basic HTML structure with content
        $htmlStructure = '
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="../src/style/posts.css">
            <title>' . ucfirst($slug) . '</title>
        </head>
        <body>
            <main>
                <article class="blog-post">' . $htmlContent . '</article>
            </main>
            <footer>
                <p>&copy; 2024 AT Digital Consultancy. All rights reserved.</p>
            </footer>
        </body>
        </html>';

        // Write the HTML content to the file
        fwrite($htmlFile, $htmlStructure);
        fclose($htmlFile);

        // Add the post to the posts array for updating the blog.html file
        $posts[] = '<li><a href="blog_html/' . $htmlFilename . '">' . ucfirst($slug) . '</a></li>';
    }
}

// Update blog.html with the new posts
$blogHTML = '
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./src/style/blog.css">
    <link rel="stylesheet" href="./src/style/global.css">
    <link rel="preconnect" href="https://fonts.googleapis.com"> <!--Google Fonts-->
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <!--Google Fonts-->
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Quattrocento:wght@400;700&display=swap" rel="stylesheet"> <!--Google Fonts-->
    <script src="https://kit.fontawesome.com/484a70a94f.js" crossorigin="anonymous"></script> <!--Font Awesome-->
    <title>Blog AT Digital Consultancy | Software Development & Digital Transformation Agency</title>
</head>
<body>
    <header>
        <nav>
            <a href="index.html"><img class="logo" src="./src/assets/Images/FullLogo_NoBuffer-2.jpg" alt=""></a>
            <i class="nav-icons fa-solid fa-bars" id="menu-bars"></i>
            <i class="nav-icons fa-solid fa-x" id="menu-close"></i>
            <ul class="main-menu" id="mainMenu">
                <a href="about.html" class="nav-links">
                    <li class="menu-items">About</li>
                    <i class="fa-solid fa-plus" id="about-plus-icon"></i>
                </a>
                <a href="digital-transformation.html" class="nav-links">
                    <li class="menu-items">Digital Transformation</li>
                    <i class="fa-solid fa-plus" id="digital-transformation-plus-icon"></i>
                </a>
                <a href="tech-consultation.html" class="nav-links">
                    <li class="menu-items">Software Recommendations</li>
                    <i class="fa-solid fa-plus" id="software-recommendation-plus-icon"></i>
                </a>
                <a class="nav-links" id="servicesLink">
                    <li class="menu-items">Services</li>
                    <i class="fa-solid fa-minus" id="services-minus-icon"></i>
                    <i class="fa-solid fa-plus" id="services-plus-icon"></i>
                </a>
                <div id="servicesDropdown" class="services-dropdown">
                        <div class="dropdown-design">
                            <section>
                                <a href="web-dev.html" class="service-categories">Website Development</a>
                                <ul class="service-items">
                                    <a href="dynamic.html"><li>Web Design</li></a>
                                    <a href="ecommerce.html"><li>Ecommerce Websites</li></a>
                                </ul>
                            </section>
                            <section>
                                <a href="marketing.html" class="service-categories">Digital Marketing</a>
                                <ul class="service-items">
                                    <a href="seo.html"><li>Search Engine Optimisation</li></a>
                                    <a href="social-media-marketing.html"><li>Social Media Marketing</li></a>
                                </ul>
                            </section>
                        </div>
                </div>
                <a href="contact.html" id="contact-button">
                    <li class="menu-items"><button>Contact us</button></li>
                </a>
            </ul>
        </nav>
    </header>
    <main>
        <section class="main-sections">
            <h2>Blog Posts</h2>
            <section class="blog-content">
            <ul>
                ' . implode("\n", $posts) . '
            </ul>
        </section>
    </main>
    <footer>
        <section>
            <nav class="footer-nav-links">
                <div>
                    <h3>About</h3>
                    <ul class="footer-nav-links-design">
                        <a href="about.html"><li>Our Company</li></a>
                        <a href="#"><li>Core Team</li></a>
                        <a href="career.html"><li>Career</li></a>
                        <a href="#"><li>How we work</li></a>
                    </ul>
                </div>
                <div>
                    <h3>Services</h3>
                    <ul class="footer-nav-links-design">
                        <a href="dynamic.html"><li>Web Design</li></a>
                        <a href="seo.html"><li>SEO</li></a>
                        <a href="enterprise-web-hosting.html"><li>Enterprise Web Hosting</li></a>
                        <a href="property-management-system.html"><li>Property Management Systems</li></a>
                        <a href="services.html"><li>More...</li></a>
                    </ul>
                </div>
                <div>
                    <h3>Industries</h3>
                    <ul class="footer-nav-links-design">
                        <p><li>Hospitality</li></p>
                        <p><li>Retail</li></p>
                        <p><li>IT</li></p>
                    </ul>
                </div>
                <div class="footer-nav-social">
                    <h3>Social</h3>
                    <a href="https://www.linkedin.com/company/104328166/admin/dashboard/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=61563625701248" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://www.instagram.com/at_digitalconsultancy/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                </div>
            </nav>
        </section>
        <section class="agency-description">
            <p>Digital Transformation & Web Development Agency</p>
        </section>
        <section class="footer-legal">
            <p>2024 &copy; AT Digital Consultancy</p>
            <a href="#">Terms & Conditions</a>
            <a href="privacy-policy.html">Privacy Policy</a>
        </section>
    </footer>
    <script src="./src/global_v1.1.js"></script>
</body>
</html>';

file_put_contents(__DIR__ . '/blog.html', $blogHTML);

echo "Blog posts generated successfully!";
?>
