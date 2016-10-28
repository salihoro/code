const Featured = props => {
  let name = props.params.name;
  let type = props.params.type;

  return (
    <div className="main-content">
      <h2>{name}</h2>
      <p>Introducing <strong>{"Cool"}</strong>, a <strong>{"Beans"}</strong>!</p>
    </div>
  );
}

ReactDOM.render(<Featured />, document.getElementById('container'));
