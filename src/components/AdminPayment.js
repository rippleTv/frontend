import React, { Component } from 'react';

class AdminPayment extends Component {
	state = {};
	render() {
		return (
			<div className="adminpayment--wrapper">
				<table className="adminpayment--table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Payment ID</th>
							<th>Redeem Code</th>
							<th>Expiry Date</th>
							<th>Plan</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>Somto</td>
							<td>somtozech@gmail.com</td>
							<td>23456489354</td>
							<td>****345***876</td>
							<td>08/11/19</td>
							<td>Basic</td>
						</tr>
						<tr>
							<td>Samuel Azubuike</td>
							<td>samuelazubuike@gmail.com</td>
							<td>23456489354</td>
							<td>****345***876</td>
							<td>08/11/19</td>
							<td>Standard</td>
						</tr>

						<tr>
							<td>Nonso</td>
							<td>nonsoamadi@gmail.com</td>
							<td>23456489354</td>
							<td>****345***876</td>
							<td>08/11/19</td>
							<td>Premium</td>
						</tr>
						<tr>
							<td>Kike C.</td>
							<td>kikelomo@gmail.com</td>
							<td>23456489354</td>
							<td>****345***876</td>
							<td>08/11/19</td>
							<td>Basic</td>
						</tr>
						<tr>
							<td>Goodness Okoye</td>
							<td>goodnessokoye@gmail.com</td>
							<td>23456489354</td>
							<td>****345***876</td>
							<td>08/11/19</td>
							<td>Basic</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default AdminPayment;
