import { useState } from "react";
import "./Form.css";

function Form({ total, items }) {
  const [formulario, setFormulario] = useState({
    buyer: {
      name: "",
      phone: "",
      email: "",
    },
    total: total,
    items: items,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e);

    setFormulario({
      ...formulario,
      buyer: {
        ...formulario.buyer,
        [name]: value,
      },
    });
  };

  const { name, phone, email } = formulario;

  return (
    <div>
      <form>
        <div className="inputs">
          <div>
            <p>Name</p>
            <input
              type="text"
              value={name}
              name="name"
              onChange={handleChange}
            />
          </div>
          <div>
            <p>Email</p>
            <input
              type="text"
              value={email}
              name="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <p>Phone</p>
            <input
              type="text"
              value={phone}
              name="phone"
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
