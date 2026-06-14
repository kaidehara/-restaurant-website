const menuData = {
  starters: [
    { name: 'Burrata & Heirloom Tomato', price: 'RM 38', desc: 'Creamy burrata, roasted cherry tomatoes, aged balsamic, fresh basil oil.', tag: 'veg', tagLabel: 'Vegetarian', img: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&q=80' },
    { name: 'Seared Scallops', price: 'RM 58', desc: 'Pan-seared diver scallops, cauliflower purée, crispy capers, lemon butter.', tag: 'chef', tagLabel: "Chef's Pick", img: 'https://images.unsplash.com/photo-1599021419847-d8a7a6aba5b4?w=400&q=80' },
    { name: 'Lobster Bisque', price: 'RM 45', desc: 'Rich bisque with whole lobster claw, tarragon cream, brioche croutons.', tag: 'new', tagLabel: 'New', img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80' },
    { name: 'Truffle Arancini', price: 'RM 32', desc: 'Crispy risotto balls, black truffle, fontina, house-made aioli.', tag: 'veg', tagLabel: 'Vegetarian', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80' },
  ],
  mains: [
    { name: 'Wagyu Beef Tenderloin', price: 'RM 148', desc: 'MS7 wagyu, potato gratin, asparagus, red wine jus, bone marrow butter.', tag: 'chef', tagLabel: "Chef's Pick", img: 'https://images.unsplash.com/photo-1546964124-0cce460f38ef?w=400&q=80' },
    { name: 'Pan-Roasted Salmon', price: 'RM 88', desc: 'Atlantic salmon, fennel purée, dill oil, pickled cucumber, caviar.', tag: 'new', tagLabel: 'New', img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80' },
    { name: 'Wild Mushroom Risotto', price: 'RM 68', desc: 'Porcini, shiitake, chanterelle, aged Parmesan, truffle oil, fresh herbs.', tag: 'veg', tagLabel: 'Vegetarian', img: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&q=80' },
    { name: 'Duck Confit', price: 'RM 95', desc: 'Slow-cooked duck leg, lentils du Puy, cherry gastrique, crispy skin.', tag: 'chef', tagLabel: "Chef's Pick", img: 'https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=400&q=80' },
    { name: 'Herb-Crusted Rack of Lamb', price: 'RM 135', desc: 'French-trimmed rack, Dijon herb crust, ratatouille, rosemary jus.', tag: '', tagLabel: '', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80' },
    { name: 'Grilled Tiger Prawns', price: 'RM 98', desc: 'Jumbo prawns, garlic herb butter, charred corn, lime salsa.', tag: 'new', tagLabel: 'New', img: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&q=80' },
  ],
  desserts: [
    { name: 'Dark Chocolate Fondant', price: 'RM 32', desc: 'Warm Valrhona chocolate, salted caramel centre, vanilla bean ice cream.', tag: 'chef', tagLabel: "Chef's Pick", img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80' },
    { name: 'Lemon Tart', price: 'RM 28', desc: 'French pastry shell, curd, Italian meringue, raspberry coulis.', tag: 'veg', tagLabel: 'Vegetarian', img: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=400&q=80' },
    { name: 'Crème Brûlée', price: 'RM 26', desc: 'Classic vanilla custard, caramelised sugar crust, seasonal berries.', tag: 'veg', tagLabel: 'Vegetarian', img: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=400&q=80' },
    { name: 'Mango Panna Cotta', price: 'RM 30', desc: 'Coconut panna cotta, Alphonso mango gel, toasted coconut flakes.', tag: 'new', tagLabel: 'New', img: 'https://images.unsplash.com/photo-1488477304112-4944851de03d?w=400&q=80' },
  ],
  drinks: [
    { name: 'Golden Fork Signature', price: 'RM 48', desc: 'House cocktail — infused rum, lychee, elderflower, yuzu foam.', tag: 'new', tagLabel: 'New', img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&q=80' },
    { name: 'Chardonnay Reserve', price: 'RM 62', desc: 'Barrel-aged Chardonnay, buttery with notes of vanilla and toasted oak.', tag: '', tagLabel: '', img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=80' },
    { name: 'Sparkling Elderflower', price: 'RM 22', desc: 'House-made elderflower cordial, sparkling water, mint, lemon wheel.', tag: 'veg', tagLabel: 'Non-alcoholic', img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80' },
    { name: 'Barista Cold Brew', price: 'RM 18', desc: 'Single-origin Colombian, 18-hour cold brew, oat milk, cinnamon.', tag: '', tagLabel: '', img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80' },
  ],
};

function renderMenu(tab) {
  const grid = document.getElementById('menuGrid');
  const items = menuData[tab];
  grid.innerHTML = items.map((item, i) => `
    <div class="menu-card" style="animation-delay:${i * 0.06}s">
      <div class="menu-card-img">
        <img src="${item.img}" alt="${item.name}" loading="lazy" />
        ${item.tag ? `<span class="menu-tag ${item.tag}">${item.tagLabel}</span>` : ''}
      </div>
      <div class="menu-card-body">
        <div class="menu-card-header">
          <h3>${item.name}</h3>
          <span class="menu-price">${item.price}</span>
        </div>
        <p class="menu-desc">${item.desc}</p>
      </div>
    </div>
  `).join('');
}

document.querySelectorAll('.tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    renderMenu(btn.dataset.tab);
  });
});

renderMenu('starters');

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
window.closeMobile = () => mobileMenu.classList.remove('open');

const resDate = document.getElementById('resDate');
if (resDate) {
  const today = new Date().toISOString().split('T')[0];
  resDate.setAttribute('min', today);
  resDate.value = today;
}

window.handleReserve = function(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type=submit]');
  btn.textContent = 'Confirming…';
  btn.disabled = true;
  setTimeout(() => {
    document.getElementById('formSuccess').classList.add('show');
    e.target.reset();
    btn.textContent = 'Confirm Reservation';
    btn.disabled = false;
    if (resDate) resDate.value = new Date().toISOString().split('T')[0];
  }, 1200);
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view'); });
}, { threshold: 0.1 });
document.querySelectorAll('.section').forEach(s => observer.observe(s));
