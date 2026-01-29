document.addEventListener('DOMContentLoaded', () => {
    const thumbs = document.querySelectorAll('.thumb');
    const title = document.querySelector('.title');
    const subtitle = document.querySelector('.subtitle');
    const productImg = document.querySelector('.product-img');
    const splashImg = document.querySelector('.splash-img');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    const products = {
        rc_cola: {
            title: 'RC COLA',
            tagline: 'ALWAYS THE RIGHT ONE',
            description: "The classic American cola that has been delighting taste buds since 1905. With its unique blend of flavors, RC Cola offers a crisp and refreshing experience.",
            img: 'assets/images/rc_cola_can.webp',
            logo: 'assets/images/rc_cola_logo.svg',
            color: '#0047AB'
        },
        frostea: {
            title: 'FROSTEA',
            tagline: 'REFRESH YOUR SOUL',
            description: "Frostea combines the natural goodness of tea with a burst of fruity freshness. It's the perfect companion for a revitalizing escape.",
            img: 'assets/images/frostea_can.webp',
            logo: 'assets/images/frostea_logo.svg',
            color: '#FF8C00'
        },
        red_rain: {
            title: 'RED RAIN',
            tagline: 'FUEL THE RAIN',
            description: "Unleash your energy with Red Rain. Engineered for those who push their limits, it provides the powerful boost you need to conquer your day.",
            img: 'assets/images/red_rain_can.webp',
            logo: 'assets/images/red_rain_logo.svg',
            color: '#D32F2F'
        },
        royal: {
            title: 'ROYAL',
            tagline: 'PURE REFRESHMENT',
            description: "Royal offers a range of vibrant and fruity flavors that bring joy to every occasion. The premium choice for pure refreshment.",
            img: 'assets/images/royal_can.webp',
            logo: 'assets/images/royal_logo.svg',
            color: '#4CAF50'
        },
        bizon: {
            title: 'BIZON',
            tagline: 'WILD ENERGY',
            description: "Bizon is the energy drink for the adventurous spirit. With its bold taste and potent formula, it fuels your drive.",
            img: 'assets/images/bizon_can.webp',
            logo: 'assets/images/bizon_logo.svg',
            color: '#1A1A1A'
        },
        frost: {
            title: 'FROST',
            tagline: 'CHILL TO THE MAX',
            description: "Experience the ultimate cooling sensation with Frost. Designed to deliver a smooth, crisp, and maximum chill experience.",
            img: 'assets/images/frost_can.webp',
            logo: 'assets/images/frost_logo.svg',
            color: '#0288D1'
        }
    };

    let currentIndex = 0;
    const productKeys = Object.keys(products);
    const brandLogo = document.querySelector('.brand-logo');
    const description = document.querySelector('.description');

    function updateProduct(index) {
        const key = productKeys[index];
        const product = products[key];

        // Transitions
        title.style.opacity = '0';
        title.style.transform = 'translateY(-20px)';
        subtitle.style.opacity = '0';
        subtitle.style.transform = 'translateY(-20px)';
        description.style.opacity = '0';
        description.style.transform = 'translateY(20px)';
        productImg.style.transform = 'translateY(100px) rotate(10deg)';
        productImg.style.opacity = '0';
        brandLogo.style.opacity = '0';
        brandLogo.style.transform = 'scale(0.8)';

        setTimeout(() => {
            title.textContent = product.title;
            subtitle.textContent = product.tagline;
            description.textContent = product.description;
            productImg.src = product.img;
            brandLogo.src = product.logo;
            document.body.style.backgroundColor = product.color;
            document.body.style.color = index === 4 ? '#000b47' : '#ffffff'; // Dark color for Bizon (white background?) or light for others

            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
            subtitle.style.opacity = '1';
            subtitle.style.transform = 'translateY(0)';
            description.style.opacity = '1';
            description.style.transform = 'translateY(0)';
            productImg.style.transform = 'translateY(0) rotate(0)';
            productImg.style.opacity = '1';
            brandLogo.style.opacity = '1';
            brandLogo.style.transform = 'scale(1)';
        }, 400);

        // Update thumbs
        thumbs.forEach(t => t.classList.remove('active'));
        thumbs[index].classList.add('active');
    }

    thumbs.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            if (currentIndex === index) return;
            currentIndex = index;
            updateProduct(currentIndex);
        });
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + productKeys.length) % productKeys.length;
        updateProduct(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % productKeys.length;
        updateProduct(currentIndex);
    });

    // Initialize the first product
    updateProduct(currentIndex);
});
