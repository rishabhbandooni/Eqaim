import { useEffect, useState } from "react";
import Data from "../../../../json/data.json";
function Header() {
  const [productRequests, setProductRequests] = useState([]);
  useEffect(() => {
    if (Data) setProductRequests(Data.productRequests);
  }, []);

  return (
    <div className="Header">
      <div className="Navbar">Navbar</div>
      <div className="cardContainer">
        <div className="cardContent">
          {productRequests.map((productRequest) => (
            <div
              className="cardProducts"
              key={productRequest.id}
              style={{ padding: 15, borderBottom: "1px solid #ffffff" }}
            >
              <div>
                <p className="upvotes">⬆️{productRequest.upvotes}</p>
              </div>
              <div>
                <h4 className="cardContentHeading">{productRequest.title}</h4>
                <p className="description">{productRequest.description}</p>
                <button className="category">{productRequest.category}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
