const Button1 = ({ setNum, name, age }) => {
  return (
    <div>
      <div>
        Name:{name}, Age:{age}
      </div>

      <button onClick={() => setNum(1)}>Click Button1</button>
    </div>
  );
};

export default Button1;
