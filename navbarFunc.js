
            // Mobile menu toggle functionality with smooth animations
            const mobileMenuBtn = document.getElementById("mobile-menu-btn");
            const mobileMenu = document.getElementById("mobile-menu");
            const menuLines = mobileMenuBtn.querySelectorAll("span");
            const menuItems = mobileMenu.querySelectorAll("a, .flex.flex-col");
            let isMenuOpen = false;

            function openMenu() {
                isMenuOpen = true;

                // Animate menu container
                mobileMenu.style.maxHeight = "500px";
                mobileMenu.style.opacity = "1";

                // Animate menu items with staggered effect
                setTimeout(() => {
                    menuItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.style.transform = "translateY(0)";
                            item.style.opacity = "1";
                        }, index * 100);
                    });
                }, 100);

                // Transform hamburger to X
                menuLines[0].style.transform = "rotate(45deg) translateY(6px)";
                menuLines[1].style.opacity = "0";
                menuLines[2].style.transform =
                    "rotate(-45deg) translateY(-6px)";
            }

            function closeMenu() {
                isMenuOpen = false;

                // Reset menu items
                menuItems.forEach((item) => {
                    item.style.transform = "translateY(8px)";
                    item.style.opacity = "0";
                });

                // Animate menu container
                setTimeout(() => {
                    mobileMenu.style.maxHeight = "0";
                    mobileMenu.style.opacity = "0";
                }, 150);

                // Reset hamburger icon
                menuLines[0].style.transform = "rotate(0deg) translateY(0px)";
                menuLines[1].style.opacity = "1";
                menuLines[2].style.transform = "rotate(0deg) translateY(0px)";
            }

            mobileMenuBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                if (isMenuOpen) {
                    closeMenu();
                } else {
                    openMenu();
                }
            });

            // Close mobile menu when clicking outside
            document.addEventListener("click", (e) => {
                if (
                    !mobileMenuBtn.contains(e.target) &&
                    !mobileMenu.contains(e.target) &&
                    isMenuOpen
                ) {
                    closeMenu();
                }
            });

            // Close menu when clicking on menu links (for better UX)
            mobileMenu.addEventListener("click", (e) => {
                if (e.target.tagName === "A") {
                    setTimeout(() => closeMenu(), 200);
                }
            });

            // Handle window resize
            window.addEventListener("resize", () => {
                if (window.innerWidth >= 768 && isMenuOpen) {
                    closeMenu();
                }
            });
