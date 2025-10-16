 function applySettings() {
      const bgColor = localStorage.getItem('bgColor');
      const fontColor = localStorage.getItem('fontColor');
      const fontSize = localStorage.getItem('fontSize');

      if (bgColor) document.body.style.backgroundColor = bgColor;
      if (fontColor) document.body.style.color = fontColor;
      if (fontSize) {
        if (fontSize === 'small') document.body.style.fontSize = '14px';
        else if (fontSize === 'medium') document.body.style.fontSize = '18px';
        else if (fontSize === 'large') document.body.style.fontSize = '22px';
      }

      
      if (bgColor) document.getElementById('bgColor').value = bgColor;
      if (fontColor) document.getElementById('fontColor').value = fontColor;
      if (fontSize) document.getElementById('fontSize').value = fontSize;
    }

    
    document.addEventListener('DOMContentLoaded', applySettings);

  
    document.getElementById('saveBtn').addEventListener('click', () => {
      const bgColor = document.getElementById('bgColor').value;
      const fontColor = document.getElementById('fontColor').value;
      const fontSize = document.getElementById('fontSize').value;

      localStorage.setItem('bgColor', bgColor);
      localStorage.setItem('fontColor', fontColor);
      localStorage.setItem('fontSize', fontSize);

      applySettings(); 
      alert('บันทึกการตั้งค่าเรียบร้อยแล้ว');
    });

    
    document.getElementById('resetBtn').addEventListener('click', () => {
      localStorage.clear();
      alert('รีเซ็ตการตั้งค่าเรียบร้อยแล้ว');
      location.reload(); 
    });