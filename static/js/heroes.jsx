function Application() {
return (
<div className="container">
  <h2>Greek Heroes</h2>
  <table className="table table-striped">
    <thead>
      <tr>
        <th>Name</th>
        <th>Birth Parents</th>
        <th>Type</th>
        <th>Strength or Power</th>
        <th>Death</th>
        <th>Hero Origins</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Herucles</td>
        <td>Zeus and Alcmene</td>
        <td>Demigod</td>
        <td>Bow and arrow, champion wrestler, superhuman strength, intelligence</td>
        <td>N/A</td>
        <td>The Twelve Labors</td>
      </tr>
      <tr>
        <td><a href="/heroes/odysseus">Odysseus</a></td>
        <td>N/A</td>
        <td>Human</td>
        <td>Versatility, brilliance</td>
        <td>Killed by Telegonus</td>
        <td>The Odyssey: ten eventful years he took to return home after the Trojan War</td>
      </tr>
      <tr>
        <td><a href="/heroes/perseus">Perseus</a></td>
        <td>Zeus and Danae</td>
        <td>Demigod</td>
        <td>N/A</td>
        <td>Died of old age</td>
        <td>Kill Medusa</td>
      </tr>
    </tbody>
  </table>
</div>
);
}

ReactDOM.render(<Application />, document.getElementById('container'));
