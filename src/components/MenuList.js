export default function MenuList() {

   const dishes = [
    {
      name: "Bruschetta",
      description: "Tomaten, Knoblauch und Basilikum auf geröstetem Brot.",
      price: "6,50 €",
    },
    {
      name: "Lemon Pasta",
      description: "Pasta mit Zitronen-Sahne-Sauce und frischen Kräutern.",
      price: "12,90 €",
    },
    {
      name: "Tiramisu",
      description: "Klassisches italienisches Dessert mit Mascarpone.",
      price: "7,20 €",
    },
  ];

  return (
    <section className="menu-section">
      <h2 className="menu-title">Our Menu</h2>
      <ul className="menu-list">
        {dishes.map((dish) => (
          <li key={dish.name} className="menu-item">
            <div className="menu-item-header">
              <span className="menu-item-name">{dish.name}</span>
              <span className="menu-item-price">{dish.price}</span>
            </div>
            <p className="menu-item-description">{dish.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
