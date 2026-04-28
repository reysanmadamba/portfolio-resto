document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // NAV (ALL PAGES)
    // =========================
    const toggle = document.getElementById("navToggle");
    const menu = document.getElementById("mobileMenu");
    const closeBtn = document.getElementById("navClose");

    if (toggle && menu && closeBtn) {
        toggle.onclick = () => menu.classList.add("active");
        closeBtn.onclick = () => menu.classList.remove("active");

        document.querySelectorAll(".mobile-menu a").forEach(link => {
            link.addEventListener("click", () => {
                menu.classList.remove("active");
            });
        });
    }

    // =========================
    // RESERVATION MODAL (SAFE)
    // =========================
    const modal = document.getElementById("reservationModal");
    const frame = document.getElementById("toastFrame");
    const fallback = document.getElementById("fallbackMsg");

    if (modal && frame) {

        // 🔥 OPEN FROM FORM (HOME)
        window.openReservation = function () {
            const date = document.getElementById("resDate")?.value;
            const time = document.getElementById("resTime")?.value;
            const people = document.getElementById("resPeople")?.value || 2;

            if (!date || !time) {
                alert("Please select date and time");
                return;
            }

            const formatted = formatToToast(date, time);

            const url = `https://tables.toasttab.com/restaurants/605ed5a7-f0de-4ccd-a5c0-31c514082741/reserve?partySize=${people}&dateTime=${formatted}`;

            frame.src = url;
            modal.style.display = "block";

            // fallback check
            setTimeout(() => {
                try {
                    frame.contentWindow.location.href;
                } catch (e) {
                    if (fallback) fallback.style.display = "block";
                }
            }, 1500);
        };

        // OPEN FROM NAV (ALL PAGES)
        window.openReservationFromNav = function (e) {
            e.preventDefault();

            const today = new Date();

            const resDate = document.getElementById("resDate");
            const resTime = document.getElementById("resTime");
            const resPeople = document.getElementById("resPeople");

            if (resDate && resTime && resPeople) {
                resDate.value = today.toISOString().split("T")[0];
                resTime.value = "09:00";
                resPeople.value = 2;
                openReservation();
            } else {
                // menu page fallback (no form)
                const formatted = today.toISOString();
                const url = `https://tables.toasttab.com/restaurants/605ed5a7-f0de-4ccd-a5c0-31c514082741/reserve?partySize=2&dateTime=${formatted}`;
                frame.src = url;
                modal.style.display = "block";
            }
        };

        // CLOSE MODAL
        const closeBtnModal = document.querySelector(".res-close");
        if (closeBtnModal) {
            closeBtnModal.onclick = () => {
                modal.style.display = "none";
                frame.src = "";
            };
        }

        // CLICK OUTSIDE CLOSE (single version only)
        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
                frame.src = "";
            }
        });

        // FALLBACK BUTTON
        window.openToastDirect = function () {
            window.open(frame.src, "_blank");
        };
    }

    // =========================
    // DEFAULT VALUES (HOME ONLY)
    // =========================
    const resDate = document.getElementById("resDate");
    const resTime = document.getElementById("resTime");
    const resPeople = document.getElementById("resPeople");

    if (resDate && resTime && resPeople) {
        const today = new Date();
        resDate.value = today.toISOString().split("T")[0];
        resTime.value = "09:00";
        resPeople.value = 2;
    }

    // =========================
    // FORMAT FUNCTION (SHARED)
    // =========================
    function formatToToast(date, time) {
        const dt = new Date(`${date}T${time}`);

        const year = dt.getFullYear();
        const month = String(dt.getMonth() + 1).padStart(2, '0');
        const day = String(dt.getDate()).padStart(2, '0');
        const hours = String(dt.getHours()).padStart(2, '0');
        const minutes = String(dt.getMinutes()).padStart(2, '0');

        const offset = -dt.getTimezoneOffset();
        const sign = offset >= 0 ? "+" : "-";
        const offsetHours = String(Math.floor(Math.abs(offset) / 60)).padStart(2, '0');
        const offsetMinutes = String(Math.abs(offset) % 60).padStart(2, '0');

        return `${year}-${month}-${day}T${hours}:${minutes}:00.000${sign}${offsetHours}:${offsetMinutes}`;
    }

});