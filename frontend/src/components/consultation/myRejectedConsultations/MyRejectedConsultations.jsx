import './myRejectedConsultations.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function MyRejectedConsultations(props) {
  const  [rejectedAppointments, setRejectedAppointments] = useState([]);
  const [dataFetched, setDataFetched] = useState(false); // Track whether data has been fetched
  const [refundStatuses, setRefundStatuses] = useState([]); // Store refund statuses

    useEffect(() => {
        axios.get(`http://localhost:8070/consultAppointment/rejectedAppointments/${props.customerID}`)
            .then((res) => {
                console.log("Got data: ", res.data);
                setRejectedAppointments(res.data);
                setDataFetched(true); // Update state to indicate data has been fetched
            })
            .catch((err) => {
                console.log('Error getting cancelled appointments', err);
            });
    }, [props.customerID]);

    useEffect(() => {
      const fetchRefundStatuses = async () => {
        const refundStatuses = await Promise.all(rejectedAppointments.map(appointment =>
          hasRefund(appointment._id)
        ));
        setRefundStatuses(refundStatuses);
      };
  
      if (dataFetched) {
        fetchRefundStatuses();
      }
    }, [rejectedAppointments, dataFetched]);
  
    const hasRefund = async (appointmentId) => {
      try {
        const response = await axios.get(`http://localhost:8070/refund/checkExistingRefund/${appointmentId}`);
        return response.data.hasRefund;
      } catch (error) {
        console.error('Error checking existing refund:', error);
        return false; // Return false in case of error
      }
    };

  return (
    <>
    
        <div>
            <h3>Rejected Consultations</h3>
            <table style={{ marginTop: "5%" }}>
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Date</th>
                <th scope="col">Center</th>
                <th scope="col">Specialist</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {rejectedAppointments.map((appointment, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.center}</td>
                  <td>{appointment.specialist}</td>
                  <td>{appointment.status}</td>
                  <td>
                    {dataFetched && refundStatuses[index] !== undefined && (
                      <>
                        {!refundStatuses[index] && (
                          <button variant="primary">Apply refund</button>
                        )}
                        {refundStatuses[index] && (
                          <span>Refund already requested</span>
                        )}
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    
    </>
  )
}

export default MyRejectedConsultations