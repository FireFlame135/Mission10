import { useEffect, useState } from 'react';

// Define the shape of our data based on the C# backend DTO
export interface Bowler {
  bowlerId: number;
  firstName: string;
  middleInit: string | null;
  lastName: string;
  teamName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phoneNumber: string;
}

const BowlerList = () => {
  const [bowlers, setBowlers] = useState<Bowler[]>([]);

  useEffect(() => {
    const fetchBowlerData = async () => {
      // Replace YOUR_BACKEND_PORT with your actual API port
      const response = await fetch('http://localhost:5192/api/bowler'); 
      const data = await response.json();
      setBowlers(data);
    };

    fetchBowlerData();
  }, []);

  return (
    <>
      <div className="row">
        <h4 className="text-center mb-3">Marlins & Sharks Bowlers</h4>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Bowler Name</th>
              <th>Team Name</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Zip</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {bowlers.map((b) => (
              <tr key={b.bowlerId}>
                <td>
                  {b.firstName} {b.middleInit ? `${b.middleInit}. ` : ''} {b.lastName}
                </td>
                <td>{b.teamName}</td>
                <td>{b.address}</td>
                <td>{b.city}</td>
                <td>{b.state}</td>
                <td>{b.zip}</td>
                <td>{b.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BowlerList;