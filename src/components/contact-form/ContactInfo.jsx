import React from 'react'

function ContactInfo() {
  return (
    <div className='bg-gradient-to-r from-blue-500 to-blue-400 w-full h-full p-6 rounded-xl text-white'>
        <p className='mb-5'><span className='font-bold'>Address -</span> Rue Ibn Hanbal, Residence Ibn Khaldoune Imb, 1 appt, 10, Rabat 10080</p>

        <p className='mb-5'><span className='font-bold'>Phone -</span> 05376-72227</p>

        <p className='mb-1'><span className='font-bold'>hours</span></p>
        <table class="w-4/5 mx-auto ">
        <tbody >
          <tr>
            <td className="py-2 ">Monday</td>
            <td className="py-2 text-right">9 AM–5:30 PM</td>
          </tr>
          <tr className="border-t">
            <td className="py-2 ">Tuesday</td>
            <td className="py-2 text-right">9 AM–5:30 PM</td>
          </tr>
          <tr className="border-t">
            <td className="py-2 ">Wednesday</td>
            <td className="py-2 text-right">9 AM–5:30 PM</td>
          </tr>
          <tr className="border-t">
            <td className="py-2 ">Thursday</td>
            <td className="py-2 text-right">9 AM–5:30 PM</td>
          </tr>
          <tr className="border-t">
            <td className="py-4 ">Friday</td>
            <td className="py-2 text-right">9 AM–5:30 PM</td>
          </tr>
          <tr className="border-t">
            <td className="py-2 ">Saturday</td>
            <td className="py-2 text-right">9:30 AM–1:30 PM</td>
          </tr>
          <tr className="border-t">
            <td className="py-2 ">Sunday</td>
            <td className="py-2 text-right">Closed</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

// Hours: 
// Friday	9 AM–5:30 PM
// Saturday	9:30 AM–1:30 PM
// Sunday	Closed
// Monday	9 AM–5:30 PM
// 9 AM–5:30 PM
// Wednesday	9 AM–5:30 PM
// Thursday	9 AM–5:30 PM
// Suggest new hours




export default ContactInfo