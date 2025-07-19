document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"], a[href^="index.html#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Prevent default only if it's an internal anchor link
            if (this.hash || this.getAttribute('href').startsWith('index.html#')) {
                e.preventDefault();

                // Determine the target element
                let targetId = this.hash;
                if (this.getAttribute('href').startsWith('index.html#')) {
                    targetId = '#' + this.getAttribute('href').split('#')[1];
                }

                // Only scroll if on the same page or navigating to index.html and the section exists
                if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || !targetId) {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                } else {
                    // For links from package pages back to index.html sections
                    window.location.href = 'index.html' + targetId;
                }

                // Close the navbar on small screens after clicking a link
                const navbarCollapse = document.getElementById('navbarNav');
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });

    // Update current year in footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Define package details globally or in an accessible scope
    const packageDetails = {
        'package-silver': { // Corresponds to package-silver.html
            name: 'Package 1: SILVER',
            description: 'এই প্যাকেজটি সীমিত বাজেটের শিক্ষার্থীদের জন্য তৈরি করা হয়েছে, যেখানে আপনি প্রতিদিন সুষম ও স্বাস্থ্যকর খাবার পাবেন। এটি একবেলা খাবারের জন্য উপযুক্ত, যা আপনাকে সতেজ ও কর্মঠ রাখবে।',
            image: 'silver.jpg',
            enrollLink: 'https://forms.gle/yhjunvNngnLVT4p8A',
            whatsappLink: 'https://wa.me/8801327282082?text=I%20want%20to%20know%20about%20Package%201%20(Standard%20Meal).',
            features: `
                <h5>এই প্যাকেজে যা যা থাকছে:</h5>
                <ul>
                    <li>প্রতিদিন **১ বেলা খাবার** (দুপুরের খাবার অথবা রাতের খাবার)</li>
                    <li>সুষম ও সাধারণ মানের খাবার</li>
                    <li>সাশ্রয়ী মূল্যে খাবার</li>
                    <li>সাপ্তাহিক মেনু পরিবর্তন</li>
                    <li>পরিষ্কার-পরিচ্ছন্ন পরিবেশে প্রস্তুতকৃত খাবার</li>
                </ul>
                <h5>সাপ্তাহিক মেনু:</h5>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>বার</th>
                            <th>দুপুর</th>
                            <th>রাত্রি</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>শনিবার</td><td>মাছের ঝোল+ভাত</td><td>খিচুড়ি + ভর্তা</td></tr>
                        <tr><td>রবিবার</td><td>মাংস ভুনা+ভাত+ডাল</td><td>আলু ভর্তা+ভাত+ডাল</td></tr>
                        <tr><td>সোমবার</td><td>ডিম ভুনা + ভাত+ডাল</td><td>মাছের লটপটি+ভাত+ডাল</td></tr>
                        <tr><td>মঙ্গলবার</td><td>মাংস ভুনা+ভাত+ডাল</td><td>খিচুড়ি + ভর্তা</td></tr>
                        <tr><td>বুধবার</td><td>মাছের ঝোল+ভাত</td><td>ভাজি + ভাত+ডাল</td></tr>
                        <tr><td>বৃহস্পতিবার</td><td>মাংস ভুনা+ভাত+ডাল</td><td>মাছের লটপটি+ভাত+ডাল</td></tr>
                        <tr><td>শুক্রবার</td><td>বিরিয়ানি(খাসি)</td><td>আলু ভর্তা+ভাত+ডাল</td></tr>
                    </tbody>
                </table>
                <h5>মূল্য তালিকা:</h5>
                <ul>
                    <li>৭ দিনের জন্য: **৯৯৫ টাকা** মাত্র</li>
                    <li>১৫ দিনের জন্য: **১৮৯০ টাকা** মাত্র</li>
                    <li>৩০ দিনের জন্য: **৩৩৭০ টাকা** মাত্র</li>
                    <li>**ফ্রি ডেলিভারি!**</li>
                </ul>
            `
        },
        'package-golden': { // Corresponds to package-golden.html
            name: 'Package 2: GOLDEN',
            description: 'আমাদের গোল্ডেন প্যাকেজটি প্রতিদিন দুইবেলা সুষম ও স্বাস্থ্যকর খাবার নিশ্চিত করে। এটি সেইসব ব্যক্তিদের জন্য যারা স্বাস্থ্য এবং সুবিধার সমন্বয় চান, ঝামেলা ছাড়াই পুষ্টিকর খাবার উপভোগ করতে চান।',
            image: 'golden.jpg',
            enrollLink: 'https://forms.gle/Yamb8DfmaPAXAFCx6',
            whatsappLink: 'https://wa.me/8801327282082?text=I%20want%20to%20know%20about%20Package%202%20(Premium%20Deal).',
            features: `
                <h5>এই প্যাকেজে যা যা থাকছে:</h5>
                <ul>
                    <li>প্রতিদিন **২ বেলা খাবার** (দুপুরের খাবার এবং রাতের খাবার)</li>
                    <li>প্রিমিয়াম মানের উপকরণ</li>
                    <li>বিভিন্ন ধরনের খাবারের বিকল্প</li>
                    <li>পাক্ষিক মেনু পরিবর্তন</li>
                    <li>সাপ্তাহিক ডেজার্ট</li>
                </ul>
                <h5>সাপ্তাহিক মেনু:</h5>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>বার</th>
                            <th>দুপুর</th>
                            <th>রাত্রি</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>শনিবার</td><td>ভাজি+মাছের ঝোল+ভাত</td><td>ডim ভাজি+খিচুড়ি</td></tr>
                        <tr><td>রবিবার</td><td>মাংস ভুনা+ভাত+ডাল</td><td>আলু ভর্তা+ভাত+ডাল+ডিম ভাজি</td></tr>
                        <tr><td>সোমবার</td><td>ডিম ভুনা + ভাজি+ডাল</td><td>মাছের লটপটি+ভাত+ডাল</td></tr>
                        <tr><td>মঙ্গলবার</td><td>মাংস ভুনা+ভাত+ডাল</td><td>খিচুড়ি+বেগুন ভাজি+ভর্তা</td></tr>
                        <tr><td>বুধবার</td><td>ভাজি+মাছের ঝোল+ভাত+ডাল</td><td>ডিম ভুনা + ভাজি+ডাল</td></tr>
                        <tr><td>বৃহস্পতিবার</td><td> মাংস ভুনা+ভাত+ডাল</td><td>মাছের লটপটি+ভাত+ডাল</td></tr>
                        <tr><td>শুক্রবার</td><td>বিরিয়ানি(খাসি)</td><td>আলু ভর্তা+ভাত+ডাল</td></tr>
                    </tbody>
                </table>
                <h5>মূল্য তালিকা:</h5>
                <ul>
                    <li>৭ দিনের জন্য: **১৫০০ টাকা** মাত্র</li>
                    <li>১৫ দিনের জন্য: **২৯৫০ টাকা** মাত্র</li>
                    <li>৩০ দিনের জন্য: **৪২৫০ টাকা** মাত্র</li>
                    <li>**ফ্রি ডেলিভারি!**</li>
                </ul>
            `
        },
        'package-platinium': { // Corresponds to package-platinium.html
            name: 'Package 3: PLATINIUM',
            description: 'প্লাটিনাম প্যাকেজ আমাদের সেরা মানের অফার, যেখানে আপনি অতিরিক্ত সুবিধা সহ উচ্চ-মানের খাবার পাবেন। চমৎকার খাবার, ব্যক্তিগত পছন্দের সুযোগ এবং একচেটিয়া পরিষেবার মাধ্যমে একটি সত্যিকারের প্রিমিয়াম ডাইনিং অভিজ্ঞতা উপভোগ করুন।',
            image: 'platinium.jpg',
            enrollLink: 'https://forms.gle/2FB1X7gwGD23hjwU8',
            whatsappLink: 'https://wa.me/8801327282082?text=I%20want%20to%20know%20about%20Package%203%20(Family%20Pack).',
            features: `
                <h5>এই প্যাকেজে যা যা থাকছে:</h5>
                <ul>
                    <li>প্রতিদিন **৩ বেলা খাবার** (সকাল, দুপুর এবং রাতের খাবার)</li>
                    <li>গুরমেট খাবারের বিকল্প</li>
                    <li>পছন্দসই খাবারের পরিকল্পনা</li>
                    <li>মাসিক বিশেষ পদ</li>
                    <li>অগ্রাধিকার গ্রাহক সহায়তা</li>
                    <li>ফ্রি বেভারেজ</li>
                </ul>
                <h5>সাপ্তাহিক মেনু:</h5>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>বার</th>
                            <th>দুপুর</th>
                            <th>রাত্রি</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>শনিবার</td><td>ভাজি+মাছের ভুনা+ভাত+ডাল</td><td>ডিম ভাজি+খিচুড়ি+ভর্তা</td></tr>
                        <tr><td>রবিবার</td><td>মাংস ভুনা+ভাত+ডাল</td><td>বাদাম ভর্তা+আলু ভর্তা+ভাত+ডাল+ডিম ভাজি</td></tr>
                        <tr><td>সোমবার</td><td>গরুর গোস্ত + ভাজি +ভাত+ডাল</td><td>মাছের লটপটি+ভাত+ডাল</td></tr>
                        <tr><td>মঙ্গলবার</td><td>মাংস ভুনা+ভাত+ডাল</td><td>খিচুড়ি+মাংস ভুনা</td></tr>
                        <tr><td>বুধবার</td><td>ভাজি+মাছের ভুনা+ডাল +ভাত+ডাল</td><td>ডিম ভুনা + ভাজি +ডাল</td></tr>
                        <tr><td>বৃহস্পতিবার</td><td>ডিম ভুনা + মাছ ভাজা +ডাল +ভাত</td><td>মাছের লটপটি+ভাত+ডাল</td></tr>
                        <tr><td>শুক্রবার</td><td>বিরিয়ানি(খাসি)</td><td>বাদাম ভর্তা+ডাল+ভাত+ডিম ভাজি</td></tr>
                    </tbody>
                </table>
                <h5>মূল্য তালিকা:</h5>
                <ul>
                    <li>৭ দিনের জন্য: **২১২০ টাকা** মাত্র</li>
                    <li>১৫ দিনের জন্য: **৪১০০ টাকা** মাত্র</li>
                    <li>৩০ দিনের জন্য: **৭৯০০ টাকা** মাত্র</li>
                    <li>**ফ্রি ডেলিভারি!**</li>
                </ul>
            `
        }
    };

    // Function to load package details onto the dedicated page
    function loadPackageDetailsPage() {
        const path = window.location.pathname;
        let packageId = null;

        if (path.includes('package-silver.html')) {
            packageId = 'package-silver';
        } else if (path.includes('package-golden.html')) {
            packageId = 'package-golden';
        } else if (path.includes('package-platinium.html')) {
            packageId = 'package-platinium';
        }

        const details = packageDetails[packageId];
        const packageDetailsContent = document.getElementById('package-details-content');

        if (details && packageDetailsContent) {
            // Update the page title
            document.title = `DIU Meal Service - ${details.name}`;

            // Construct the HTML for the package details page
            packageDetailsContent.innerHTML = `
                <div class="card shadow-sm mb-4">
                    <div class="card-body text-center">
                        <h2 class="card-title mb-3">${details.name}</h2>
                        <img src="${details.image}" class="img-fluid rounded mb-4" alt="${details.name} image" style="max-height: 400px; object-fit: cover;">
                        <p class="card-text lead">${details.description}</p>
                        <div class="package-features-section text-start mt-4">
                            ${details.features}
                        </div>
                        <div class="mt-4 d-flex flex-column flex-md-row justify-content-center gap-3">
                            <a href="${details.enrollLink}" target="_blank" class="btn btn-primary btn-lg">Enroll Now</a>
                            <a href="${details.whatsappLink}" target="_blank" class="btn btn-success btn-lg"><i class="fab fa-whatsapp me-2"></i> WhatsApp Message</a>
                        </div>
                    </div>
                </div>
            `;
        }
    }

    // Check if it's a package details page and load content
    if (window.location.pathname.includes('package-')) {
        loadPackageDetailsPage();
    }

    // Add click effect to nav links
    document.querySelectorAll('.custom-nav-link').forEach(link => {
        link.addEventListener('click', function() {
            // Only apply click effect if not a dropdown toggle (which doesn't exist in this simplified nav)
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300); // Duration of the animation
        });
    });
});
