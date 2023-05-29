import React from 'react';
import email from 'assets/images/user/email.png'
import withdraw from 'assets/images/user/withdraw.png'
import { useNavigate } from 'react-router-dom';

const Tr = ({ info, onSendEmail, withdrawUser }) => {

  const tdStyle = {
    position: 'relative',
  };

  const imgStyle = {
    width: '100%',
    height: '40px',
    objectFit: 'contain',
  };

  return (
    <>
      {
        info.map(item => {
          return (
            <tr key={item.userIdx}>
              <td style={tdStyle} width="30%">{item.nickname}</td>
              <td style={tdStyle} width="30%">{item.email}</td>
              <td style={tdStyle} width="20%">{item.reportCount}</td>
              <td style={tdStyle} width="10%" onClick={() => onSendEmail(item)}><img src={email} style={imgStyle} /></td>
              <td style={tdStyle} width="10%" onClick={() => withdrawUser(item.userIdx)}><img src={withdraw} style={imgStyle} /></td>
            </tr>
          )
        })
      }
    </>
  )
}

export default Tr;