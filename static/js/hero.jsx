function Application() {
return (
<div className="container">
      <div className="row">
        <div className="col-sm-8">

          <h2>Info</h2>

          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action">
              <h5 className="list-group-item-heading">Birth Parents</h5>
              <p className="list-group-item-text">Zeus and Alcmene</p>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <h5 className="list-group-item-heading">Type</h5>
              <p className="list-group-item-text">Demigod</p>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <h5 className="list-group-item-heading">Strength or Power</h5>
              <p className="list-group-item-text">Bow and arrow, champion wrestler, superhuman strength, intelligence</p>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <h5 className="list-group-item-heading">Death</h5>
              <p className="list-group-item-text">N/A</p>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <h5 className="list-group-item-heading">Cause of Hero</h5>
              <p className="list-group-item-text">The Twelve Labors</p>
            </a>
          </div>

        </div>
        <div className="col-sm-4">
          <h2>Heracles</h2>
          <img className="img-responsive" src="/static/img/hercules.jpg"/>
        </div>
      </div>
</div>
);
}

ReactDOM.render(<Application />, document.getElementById('container'));
