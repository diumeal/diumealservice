document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Close the navbar on small screens after clicking a link
            const navbarCollapse = document.getElementById('navbarNav');
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
            if (bsCollapse) {
                bsCollapse.hide();
            }
        });
    });

    // Update current year in footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Package Details Modal Logic
    const packageModal = document.getElementById('packageModal');
    if (packageModal) {
        packageModal.addEventListener('show.bs.modal', function (event) {
            const button = event.relatedTarget; // Button that triggered the modal
            const packageId = button.getAttribute('data-package-id');
            const packageImageSrc = button.getAttribute('data-image'); // Get the image path from the button

            const modalPackageName = packageModal.querySelector('#modalPackageName');
            const modalPackageDescription = packageModal.querySelector('#modalPackageDescription');
            const modalPackageImage = packageModal.querySelector('#modalPackageImage');
            const modalPackageFeatures = packageModal.querySelector('#modalPackageFeatures');
            const modalEnrollNowBtn = packageModal.querySelector('#modalEnrollNowBtn');

            // Define package details with their specific information
            const packageDetails = {
                'package1': { // SILVER PACKAGE
                    name: 'Package 1: SILVER',
                    description: 'এই প্যাকেজটি সীমিত বাজেটের শিক্ষার্থীদের জন্য তৈরি করা হয়েছে, যেখানে আপনি প্রতিদিন সুষম ও স্বাস্থ্যকর খাবার পাবেন। এটি একবেলা খাবারের জন্য উপযুক্ত, যা আপনাকে সতেজ ও কর্মঠ রাখবে।',
                    enrollLink: 'https://forms.gle/yhjunvNngnLVT4p8A',
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
                'package2': { // GOLDEN PACKAGE
                    name: 'Package 2: GOLDEN',
                    description: 'আমাদের গোল্ডেন প্যাকেজটি প্রতিদিন দুইবেলা সুষম ও স্বাস্থ্যকর খাবার নিশ্চিত করে। এটি সেইসব ব্যক্তিদের জন্য যারা স্বাস্থ্য এবং সুবিধার সমন্বয় চান, ঝামেলা ছাড়াই পুষ্টিকর খাবার উপভোগ করতে চান।',
                    enrollLink: 'https://forms.gle/Yamb8DfmaPAXAFCx6',
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
                                <tr><td>শনিবার</td><td>ভাজি+মাছের ঝোল+ভাত</td><td>ডিম ভাজি+খিচুড়ি</td></tr>
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
                'package3': { // PLATINIUM PACKAGE
                    name: 'Package 3: PLATINIUM',
                    description: 'প্লাটিনাম প্যাকেজ আমাদের সেরা মানের অফার, যেখানে আপনি অতিরিক্ত সুবিধা সহ উচ্চ-মানের খাবার পাবেন। চমৎকার খাবার, ব্যক্তিগত পছন্দের সুযোগ এবং একচেটিয়া পরিষেবার মাধ্যমে একটি সত্যিকারের প্রিমিয়াম ডাইনিং অভিজ্ঞতা উপভোগ করুন।',
                    enrollLink: 'https://forms.gle/2FB1X7gwGD23hjwU8',
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

            const details = packageDetails[packageId];

            if (details) {
                modalPackageName.textContent = details.name;
                modalPackageDescription.textContent = details.description;
                modalPackageImage.src = packageImageSrc; // Set image source from data-image
                modalPackageImage.alt = details.name + ' image';
                modalPackageFeatures.innerHTML = details.features; // Set features and pricing
                modalEnrollNowBtn.href = details.enrollLink;
            }
        });
    }

    // Add click effect to nav links
    document.querySelectorAll('.custom-nav-link').forEach(link => {
        link.addEventListener('click', function() {
            if (!this.classList.contains('dropdown-toggle')) {
                this.classList.add('clicked');
                setTimeout(() => {
                    this.classList.remove('clicked');
                }, 300); // Duration of the animation
            }
        });
    });
});