import React from 'react';
import email from 'assets/images/user/email.png'
import withdraw from 'assets/images/user/withdraw.png'

const Tr = ({ info, onSendEmail, withdrawUser }) => {

  const tdStyle = {
    position: 'relative',
    flex: '1',
    flexBasis: '0',
    minWidth: '0',
  };

  const imgStyle = {
    height: '40px',
    objectFit: 'contain',
  };

  return (
    <>
      {
        info.length > 0 ? (
          info.map(item => (
            <tr key={item.userIdx}>
              <td style={{ ...tdStyle, flex: '2' }}>{item.nickname}</td>
              <td style={{ ...tdStyle, flex: '3' }}>{item.email}</td>
              <td style={{ ...tdStyle, flex: '1' }}>{item.reportCount}</td>
              <td style={{...tdStyle}} onClick={() => onSendEmail(item)} ><img src={email} style={{...imgStyle, cursor: 'pointer'}} /></td>
              <td style={{...tdStyle}} onClick={() => withdrawUser(item)}><img src={withdraw} style={{...imgStyle, cursor: 'pointer'}} /></td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5} style={tdStyle}>검색 결과가 없습니다.</td>
          </tr>
        )
      }
    </>
  )
}

export default Tr;