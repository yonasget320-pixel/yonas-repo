# yonas-repo
description
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yonas Getahun | Full-Stack Web Architect</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

    <style>
        :root {
            --bg-dark: #0b1120;
            --bg-card: #161e2d;
            --accent-blue: #00d2ff;
            --pure-white: #ffffff;
        }

        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-dark);
            color: var(--pure-white);
            overflow-x: hidden;
        }

        /* Navbar */
        .navbar {
            background: rgba(11,17,32,0.95);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(0,210,255,0.2);
        }
        .nav-link { color: white !important; font-weight: 700; margin-left: 20px; font-size: 0.9rem; }
        .nav-link:hover { color: var(--accent-blue) !important; }

        /* Hero */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            padding-top: 80px;
        }
        .hero h1 {
            font-size: clamp(2.5rem, 8vw, 4.5rem);
            font-weight: 900;
        }

        /* Avatar */
        .avatar-img {
            width: 350px;
            height: 350px;
            border-radius: 50%;
            border: 4px solid var(--accent-blue);
            padding: 20px;
            animation: float 5s infinite ease-in-out;
            object-fit: cover;
        }
        @keyframes float { 50% { transform: translateY(-25px); } }

        /* Sections */
        .section-padding { padding: 100px 0; }

        .skills-card, .contact-card {
            background: var(--bg-card);
            padding: 50px;
            border-radius: 20px;
            border: 1px solid rgba(0,210,255,0.15);
            box-shadow: 0 0 40px rgba(0,210,255,0.08);
        }

        /* Progress Bars */
        .skill-item { margin-bottom: 25px; }
        .skill-name { display: flex; justify-content: space-between; margin-bottom: 8px; font-weight: 700; }
        .progress { height: 8px; background: #1e293b; border-radius: 10px; }
        .progress-bar { background: var(--accent-blue); }

        /* Project Cards */
        .portfolio-card {
            background: var(--bg-card);
            border-radius: 15px;
            overflow: hidden;
            border: 1px solid rgba(0,210,255,0.1);
            transition: transform 0.3s ease;
            height: 100%;
        }
        .portfolio-card:hover {
            transform: translateY(-10px);
            border-color: var(--accent-blue);
        }
        .portfolio-card img {
            height: 200px;
            width: 100%;
            object-fit: cover;
        }
        .portfolio-body {
            padding: 25px;
        }
        .portfolio-body h5 {
            font-weight: 800;
            margin-bottom: 10px;
        }
        .portfolio-body p {
            font-size: 0.9rem;
            color: #94a3b8;
            margin-bottom: 20px;
        }

        /* Buttons */
        .btn-blue {
            background: var(--accent-blue);
            color: #000;
            font-weight: 800;
            padding: 14px 30px;
            border-radius: 8px;
            text-decoration: none;
            display: inline-block;
            transition: 0.3s;
        }
        .btn-blue:hover {
            background: #fff;
            color: #000;
        }

        /* Contact */
        .contact-subtitle { color: var(--accent-blue); letter-spacing: 3px; font-size: 13px; }
        .contact-title { font-size: 42px; font-weight: 900; }
        .contact-line { width: 60px; height: 3px; background: var(--accent-blue); margin: 15px 0 35px; }
        .contact-info { list-style: none; padding: 0; }
        .contact-info li { display: flex; align-items: center; margin-bottom: 18px; }
        .contact-icon {
            width: 40px; height: 40px; background: rgba(0,210,255,0.15);
            border-radius: 50%; display: flex; align-items: center;
            justify-content: center; margin-right: 15px; color: var(--accent-blue);
        }
        .contact-info a { color: white; text-decoration: none; }
        .contact-info a:hover { color: var(--accent-blue); }
        .form-control {
            background: #0b1120; border: 1px solid rgba(255,255,255,0.1);
            color: white; padding: 12px;
        }
        .form-control:focus {
            background: #0b1120; color: white; border-color: var(--accent-blue);
            box-shadow: none;
        }

        /* Footer */
        footer { border-top: 1px solid rgba(0,210,255,0.1); padding: 40px 0; text-align: center; }
        .text-blue { color: var(--accent-blue); }
    </style>
</head>
<body>

<nav class="navbar navbar-expand-lg fixed-top">
    <div class="container">
        <a class="navbar-brand text-white fw-bold" href="#">YONAS GETAHUN<span class="text-blue">.</span></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <div class="ms-auto">
                <a class="nav-link d-inline-block" href="#home">HOME</a>
                <a class="nav-link d-inline-block" href="#about">ABOUT</a>
                <a class="nav-link d-inline-block" href="#work">PROJECTS</a>
                <a class="nav-link d-inline-block" href="#contact">CONTACT</a>
            </div>
        </div>
    </div>
</nav>

<section id="home" class="hero">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-7">
                <h1>YONAS<br><span class="text-blue">GETAHUN</span></h1>
                <h4 class="text-blue mb-4">Full-Stack Web Architect</h4>
                <p class="lead">
                    Building high-performance digital systems and scalable web solutions with modern engineering standards.
                </p>
                <a href="#work" class="btn btn-blue mt-4">VIEW MY PROJECTS</a>
            </div>
            <div class="col-lg-5 text-center mt-5 mt-lg-0">
                <div class="profile-wrapper">
                    <img src="./photo_2025-12-29_10-57-00.jpg" alt="yonas getahun" class="about-profile-img">
                </div>
            </div>
        </div>
    </div>
</section>

<section id="about" class="section-padding">
    <div class="container">
        <h2 class="text-center text-blue fw-bold mb-5">About</h2>
        <div class="row g-5 align-items-center">
            <div class="col-lg-6">
                <h2>I AM <span class="text-blue">YONAS</span></h2>
                <p class="fs-5">
                    I am <b>Yonas Getahun</b>, a Full-Stack Developer passionate about scalable and elegant web applications.
                </p>
                <p>I build secure, fast, and future-ready systems using the latest industry standards. My focus is on turning complex requirements into seamless user experiences.</p>
            </div>
            <div class="col-lg-6">
                <div class="skills-card">
                    <h4 class="text-center mb-4">TECHNICAL <span class="text-blue">STACK</span></h4>
                    <div class="skill-item">
                        <div class="skill-name"><span>Frontend (React/Next.js)</span><span>95%</span></div>
                        <div class="progress"><div class="progress-bar" style="width:95%"></div></div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-name"><span>Backend (Node/Python)</span><span>88%</span></div>
                        <div class="progress"><div class="progress-bar" style="width:88%"></div></div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-name"><span>Cloud & DB (AWS/PostgreSQL)</span><span>82%</span></div>
                        <div class="progress"><div class="progress-bar" style="width:82%"></div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="work" class="section-padding">
    <div class="container">
        <h2 class="text-center fw-bold mb-5">WEB <span class="text-blue">SOLUTIONS</span></h2>
        <div class="row g-4">
            <div class="col-md-4">
                <div class="portfolio-card">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800" alt="Data Analytics">
                    <div class="portfolio-body">
                        <h5 class="text-blue">Data Intelligence Platform</h5>
                        <p>A sophisticated dashboard for real-time data visualization and predictive analytics using React and D3.js.</p>
                        <a href="#" class="text-blue text-decoration-none fw-bold">View Case Study <i class="fas fa-arrow-right ms-1"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="portfolio-card">
                    <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800" alt="Cloud Infrastructure">
                    <div class="portfolio-body">
                        <h5 class="text-blue">FinTech Core System</h5>
                        <p>High-security banking infrastructure built with Node.js microservices and encrypted database architectures.</p>
                        <a href="#" class="text-blue text-decoration-none fw-bold">View Case Study <i class="fas fa-arrow-right ms-1"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="portfolio-card">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800" alt="E-commerce">
                    <div class="portfolio-body">
                        <h5 class="text-blue">E-Commerce Ecosystem</h5>
                        <p>Scalable online retail solution featuring dynamic inventory management and seamless payment gateway integration.</p>
                        <a href="#" class="text-blue text-decoration-none fw-bold">View Case Study <i class="fas fa-arrow-right ms-1"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="contact" class="section-padding">
    <div class="container">
        <div class="row g-5">
            <div class="col-lg-6">
                <div class="contact-card">
                    <small class="contact-subtitle">LET’S CONNECT</small>
                    <h2 class="contact-title">Get In Touch</h2>
                    <div class="contact-line"></div>
                    <ul class="contact-info">
                        <li><span class="contact-icon"><i class="fas fa-envelope"></i></span>yonasget320@gmail.com</li>
                        <li><span class="contact-icon"><i class="fas fa-phone"></i></span>0946019597</li>
                        <li>
                            <span class="contact-icon"><i class="fab fa-linkedin-in"></i></span>
                            <a href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn Profile</a>
                        </li>
                        <li>
                            <span class="contact-icon"><i class="fab fa-github"></i></span>
                            <a href="https://github.com/yonasget320-pixel" target="_blank">GitHub Profile</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="contact-card">
                    <small class="contact-subtitle">SEND A MESSAGE</small>
                    <h2 class="contact-title">Let’s Talk</h2>
                    <div class="contact-line"></div>
                    <form>
                        <input type="text" class="form-control mb-3" placeholder="Your Name" required>
                        <input type="email" class="form-control mb-3" placeholder="Your Email" required>
                        <textarea class="form-control mb-4" rows="5" placeholder="Your Message" required></textarea>
                        <button type="submit" class="btn btn-blue w-100">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

<footer>
    <div class="container">
        <p class="opacity-50">© 2025 Yonas Getahun — Full-Stack Architect</p>
    </div>
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
