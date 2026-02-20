    
    const menuData = {
        // Τα δεδομένα του μενού παραμένουν ίδια
        'cold-appetizers': {
            el: { title: "Αρχίζοντας με...", items: [
                { name: "Χωριάτικο ψωμί με ελιές καλαμών & σάλτσα ντομάτας", desc: null, price: "2.00" },
                { name: "Τζατζίκι παραδοσιακό", desc: null, price: "6.50" },
                { name: "Τυροκαυτερή", desc: null, price: "7.00" },
                { name: "Παραδοσιακή Ταραμοσαλότα", desc: null, price: "7.00" },
                { name: "Φάβα ''Παντρεμένη'' Σχοινούσας με καραμελωμένο κρεμμύδι", desc: null, price: "8.00" }
            ]},
            en: { title: "To start with...", items: [
                { name: "Village Bread with Kalamata olives & tomato sauce", desc: null, price: "2.00" },
                { name: "Traditional Tzatziki", desc: null, price: "6.50" },
                { name: "Tirokafteri (Spicy Feta Cheese Dip)", desc: null, price: "7.00" },
                { name: "Traditional Taramasalata", desc: null, price: "7.00" },
                { name: "''Married'' Schinoussa Fava with caramelized onion", desc: null, price: "8.00" }
            ]}
        },
        'hot-appetizers': {
            el: { title: "Ζεστά Ορεκτικά", items: [
                { name: "Σαγανάκι κεφαλοτύρι", desc: null, price: "10.50" },
                { name: "Κολοκυθοανθοι γεμιστοί", desc: null, price: "12.00" },
                { name: "Ντολμαδάκια γιαλαντζι", desc: "γεμιστά αμπελόφυλλα με ρύζι", price: "12.00" },
                { name: "Σπανακόπιτα με τυρί χειροποίητη", desc: null, price: "9.00" },
                { name: "Κολοκυθάκια τηγανητά με τζατζικι", desc: null, price: "11.00" },
                { name: "Παραδοσιακά κεφτεδάκια με πατάτες", desc: null, price: "12.00" },
                { name: "Τηγανιά – μπουκές χοιρινές σιγανομαγειρεμένες", desc: "σε λάδι, κρασί, με πατάτες", price: "14.00" },
                { name: "Λουκάνικα σχάρας χοιρινά γεμιστά", desc: "με φέτα, λιαστή ντομάτα και πατάτες τσιπς", price: "13.00" },
                { name: "Καλαμάρι τηγανητό*", desc: null, price: "14.00" },
                { name: "Μύδια αχνιστά* με φρέσκα αρωματικά", price: "15.00" },
                { name: "Χταπόδι* σχάρας με πουρέ-φάβα", desc: null, price: "24.00" }
            ]},
            en: { title: "Hot Appetizers", items: [
                { name: "Saganaki Kefalotiri", desc: null, price: "10.50" },
                { name: "Zucchini flowers stuffed with rice", desc: null, price: "12.00" },
                { name: "''Dolmades'' stuffed vine leaves with rice", desc: null, price: "12.00" },
                { name: "Homemade Spinach Pie with cheese", desc: null, price: "9.00" },
                { name: "Fried Zucchini with Tzatziki dip", desc: null, price: "11.00" },
                { name: "Fried Meatballs with fried potatoes", desc: null, price: "12.00" },
                { name: "Tigania - Pork bites slowly cooked", desc: "in oil, wine, lemon thyme, and mild spices with potatoes", price: "14.00" },
                { name: "Grilled Pork Sausages stuffed", desc: "with feta cheese, sun-dried tomato and potato chips", price: "13.00" },
                { name: "Fried Calamari*", desc: null, price: "14.00" },
                { name: "Steamed Mussels* with fresh herbs", desc: null, price: "15.00" },
                { name: "Grilled Octopus* with fava bean", desc: null, price: "24.00" }
            ]}
        },
        'salads': {
            el: { title: "Σαλάτες", items: [
                { name: "Caprese Greca Σαλάτα", desc: "Ντοματίνια, μελιτζάνες, ήπια φέτα, ντρέσινγκ βασιλικού.", price: "12.00" },
                { name: "Παντζαροσαλάτα με καρύδια", desc: "Γαλομυζήθρα, αγγουράκι τουρσί, αρωματικά βότανα.", price: "13.00" },
                { name: "Χωριάτικη Σαλάτα Ελληνική παραδοσιακή", desc: null, price: "12.00" },
                { name: "Ντάκος Κρητικός", desc: "Με κρίθινο κρητικό, φρέσκια ντομάτα και κρητικό τυρί.", price: "12.00" },
                { name: "Χόρτα & Κολοκυθάκια αχνιστά", desc: "με Τυρί Φέτα σχάρας, ψητή Ντομάτα και ντρέσινγκ δυόσμου", price: "13.00" }
            ]},
            en: { title: "Salads", items: [
                { name: "Greek Caprese Salad", desc: "Cherry tomatoes, eggplant, mild feta cheese, basil dressing.", price: "12.00" },
                { name: "Beetroot Salad with walnut", desc: "Galomyzithra cheese, pickled cucumber, aromatic herbs.", price: "13.00" },
                { name: "Traditional Greek Salad", desc: null, price: "12.00" },
                { name: "Cretan Dakos", desc: "With Cretan barley rusk, fresh tomato and Cretan cheese.", price: "12.00" },
                { name: "Steamed Greens & Zucchini", desc: "with grilled Feta cheese, roasted Tomato, and mint dressing", price: "13.00" }
            ]}
        },
        'main-dishes': {
            el: { title: "Μαγειρευτά Παραδοσιακά", items: [
                { name: "Παραδοσιακός Μουσακάς", desc: "Μελιτζάνα, πατάτα, κιμάς, κρέμα μπεσαμέλ.", price: "14.00" },
                { name: "Παστίτσιο", desc: "Ζυμαρικά φούρνου με κιμά και κρέμα μπεσαμέλ.", price: "13.00" },
                { name: "Γεμιστά παραδοσιακά", desc: "Ντομάτα & πιπεριά γεμιστή με ρύζι", price: "12.00" },
                { name: "Γιουβέτσι μοσχαράκι με κεφαλοραβιέρα", desc: null, price: "20.00" },
                { name: "Αρνάκι στο φούρνο με πατατες", desc: null, price: "24.00" }
            ]},
            en: { title: "Traditional Cooked Dishes", items: [
                { name: "Moussaka", desc: "Layer of eggplant, potato, minced meat, bechamel cream.", price: "14.00" },
                { name: "Pasticcio", desc: "Oven pasta with minced meat & bechamel cream.", price: "13.00" },
                { name: "Stuffed tomato & bell pepper", desc: "with rice & aromatic herbs", price: "12.00" },
                { name: "Giouvetsi Veal with kefalograviera cheese", desc: null, price: "20.00" },
                { name: "Oven-Baked Lamb with Potatoes", desc: null, price: "24.00" }
            ]}
        },
        'pasta': {
            el: { title: "Ζυμαρικά", items: [
                { name: "Λιγκουίνι Μπολωνέζ", desc: "Με κιμά, σπιτική σάλτσα ντομάτας και φρέσκα βότανα", price: "12.00" },
                { name: "Λιγκουινι Νοπολιτεν", desc: "Με σπιτική σάλτσα ντομάτας", price: "10.00" },
                { name: "Σκιουφιχτά παραδοσιακά ζυμαρικά ''Al limone''", desc: "με καπνιστό σύγλινο (αλλαντικό)", price: "11.50" },
                { name: "Γιουβετσάδα* (κριθαρότο) θαλασσινών", desc: null, price: "21.00" },
                { name: "Γαριδομακαρονάδα* με κόκκινη σάλτσα", desc: "και μπισκ γαρίδας", price: "22.00" }
            ]},
            en: { title: "Pasta", items: [
                { name: "Linguini with minced meat", desc: "Homemade tomato sauce, and fresh herbs", price: "12.00" },
                { name: "Linguini with homemade tomato sauce", desc: null, price: "10.00" },
                { name: "Skioufichta Traditional Pasta ''Al limone''", desc: "with smoked syglino (cured pork)", price: "11.50" },
                { name: "Seafood* Giouvetsada (Orzotto)", desc: null, price: "21.00" },
                { name: "Shrimp* Spaghetti with homemade tomato sauce", desc: "and shrimp bisque", price: "22.00" }
            ]}
        },
        'grill': {
            el: { title: "Από την Σχάρα", items: [
                { name: "Γύρος χοιρινός με πίτα, πατάτες, τζατζίκι", desc: "πίτα ψητή, πατάτες τηγανιτές, ντομάτα ψητή", price: "16.00" },
                { name: "Σουβλάκι κοτόπουλο με πίτα, πατάτες, μουστάρδα ντιπ", desc: "πατάτες τηγανιτές", price: "15.00" },
                { name: "Kεμπάπ με πίτα, μαριναρισμένο κρεμμύδι, τζατζίκι", desc: "και κέτσαπ ντιπ", price: "16.00" },
                { name: "Φιλέτο μπούτι κοτόπουλο μαριναρισμένο στην σχάρα", desc: null, price: "16.00" },
                { name: "Γύρος κοτόπουλο με πίτα, πατάτυες τηγανιτές, μουστάρδα ντιπ", desc: null, price: "16.00" },
                { name: "T-bone Μοσχαρισια γάλακτος με πατάτες & BBQ sauce", desc: null, price: "33.00" },
                { name: "Tomahawk με πατάτες & BBQ sauce", desc: null, price: "24.00" }
            ]},
            en: { title: "From our grill", items: [
                { name: "Pork ''Gyros'' with pita bread, fries, tzatziki", desc: "pita bread, fries, roasted tomato, tzatziki", price: "16.00" },
                { name: "Chicken Souvlaki with pita bread, fries, mustard dip", desc: "fries", price: "15.00" },
                { name: "Kebab on the grill with pita bread, marinated onion, tzatziki", desc: "and ketchup", price: "16.00" },
                { name: "Marinated Boneless Chicken Thigh Fillet grilled", desc: null, price: "16.00" },
                { name: "Chicken ''Gyros'' with pita bread, fries, mustard dip", desc: null, price: "16.00" },
                { name: "T-bone with potatoes & BBQ sauce", desc: null, price: "33.00" },
                { name: "Tomahawk with potatoes & BBQ sauce", desc: null, price: "24.00" }
            ]}
        },
        'seafood-desserts': {
            el: { title: "Θαλασσινά & Γλυκός Επίλογος", items: [
                { name: "Γαρίδες* σχάρας ψητές", desc: null, price: "22.00" },
                { name: "Σαγανάκι θαλασσινών", desc: "γαρίδες*, μύδια* με σάλτσα ντομάτας και φέτα", price: "19.00" },
                { name: "Τσιπούρα στην σχάρα με λαχανικά", desc: null, price: "23.00" },
                { name: "Λαβράκι σχάρας με λαχανικά", desc: null, price: "24.00" },
                { name: "Μπακλαβάς", desc: "(Γλυκός Επίλογος)", price: "9.00" },
                { name: "Εκμέκ κανταΐφι παγωτό", desc: "(Γλυκός Επίλογος)", price: "12.00" },
                { name: "Παγωτό καϊμάκι / βανίλια (1 μπάλα)", desc: "(Γλυκός Επίλογος)", price: "4.50" },
                { name: "Παγωτό καϊμάκι / βανίλια (2 μπάλες)", desc: "(Γλυκός Επίλογος)", price: "8.00" }
            ]},
            en: { title: "Seafood & Sweet Endings", items: [
                { name: "Grilled Shrimp*", desc: null, price: "22.00" },
                { name: "Seafood Saganaki", desc: "shrimp*, mussels* with tomato sauce and feta", price: "19.00" },
                { name: "Grilled Sea Bream with vegetables", desc: null, price: "23.00" },
                { name: "Sea bass on the grill served with vegetables", desc: null, price: "24.00" },
                { name: "Baklava", desc: "(Sweet Endings)", price: "9.00" },
                { name: "Ekmek dessert with ice cream", desc: "(Sweet Endings)", price: "12.00" },
                { name: "Ice cream kaimak / vanilla (1 scoop)", desc: "(Sweet Endings)", price: "4.50" },
                { name: "Ice cream kaimak / vanilla (2 scoops)", desc: "(Sweet Endings)", price: "8.00" }
            ]}
        }
    };

document.addEventListener('DOMContentLoaded', () => {
    const flagButtons = document.querySelectorAll('.lang-flag-btn');
    const body = document.body;
    const menuGrid = document.getElementById('menu-grid');
    const modalOverlay = document.getElementById('menuModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    const closeModalBtn = document.querySelector('.modal-content .close-btn');
    
    // 1. Αρχική Γλώσσα: Αγγλικά αν είναι η πρώτη φορά
    let currentLang = localStorage.getItem('preferredLang') || 'en';

    // Συνάρτηση εμφάνισης μενού
    function renderMenuPreviews(lang) {
        if (!menuGrid) return;
        menuGrid.innerHTML = '';
        
        for (const categoryId in menuData) {
            const category = menuData[categoryId][lang];
            const card = document.createElement('div');
            card.classList.add('menu-card');
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');
            card.dataset.categoryId = categoryId;

            let html = `<h4>${category.title}</h4><div>`;
            const itemsToDisplay = category.items.slice(0, 4);

            itemsToDisplay.forEach(item => {
                html += `
                    <div class="menu-item">
                        <strong>
                            <span>${item.name}</span>
                            <span class="price">€${item.price}</span>
                        </strong>
                        ${item.desc ? `<span class="muted">${item.desc}</span>` : ''}
                    </div>`;
            });
            
            html += '</div>';
            card.innerHTML = html;
            card.addEventListener('click', () => openModal(categoryId, lang));
            menuGrid.appendChild(card);
        }
    }

    // Συνάρτηση εφαρμογής γλώσσας
    function setLanguage(lang) {
        currentLang = lang;
        body.className = 'lang-' + lang;
        localStorage.setItem('preferredLang', lang);

        // Ενημέρωση κειμένων data-lang
        document.querySelectorAll('[data-lang-el], [data-lang-en]').forEach(el => {
            const text = el.getAttribute(`data-lang-${lang}`);
            if (el.tagName === 'TITLE') document.title = text;
            else if (text) el.textContent = text;
        });

        // Ενημέρωση κουμπιών σημαίας
        flagButtons.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang-val') === lang);
        });

        renderMenuPreviews(lang);
    }

    // Event Listeners για σημαίες
    flagButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.getAttribute('data-lang-val'));
        });
    });

    // Modal Logic
    function openModal(categoryId, lang) {
        const category = menuData[categoryId][lang];
        modalTitle.textContent = category.title;
        let html = '';
        category.items.forEach(item => {
            html += `
                <div class="menu-item">
                    <strong><span>${item.name}</span><span class="price">€${item.price}</span></strong>
                    ${item.desc ? `<span class="muted">${item.desc}</span>` : ''}
                </div>`;
        });
        modalContent.innerHTML = html;
        modalOverlay.style.display = 'flex';
        body.style.overflow = 'hidden';
    }

    function closeModal() {
        modalOverlay.style.display = 'none';
        body.style.overflow = '';
    }

    closeModalBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });

    // Εκκίνηση
    setLanguage(currentLang);
});
  