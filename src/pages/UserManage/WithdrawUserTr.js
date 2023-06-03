import React from 'react';
import email from 'assets/images/user/email.png'
const Tr = ({ info, onSendEmail }) => {

  const tdStyle = {
    position: 'relative',
    flex: '1',
    flexBasis: '0',
    minWidth: '0',
  };

  const imgStyle = {
    width: '100%',
    height: '40px',
    objectFit: 'contain',
  };

  return (
    <>
      {
        info.length > 0 ? (
          info.map(item => (
            <tr key={item.userIdx}>
              <td style={{ ...tdStyle, flex: '3' }}>{item.nickname}</td>
              <td style={{ ...tdStyle, flex: '4' }}>{item.email}</td>
              <td style={{ ...tdStyle, flex: '2' }}>{item.reportCount}</td>
              <td style={{...tdStyle, cursor: 'pointer'}} onClick={() => onSendEmail(item)}><img src={email} style={imgStyle} /></td>
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