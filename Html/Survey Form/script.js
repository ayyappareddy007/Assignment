document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission behavior
  
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const gender = document.querySelectorAll('input[name="gender"]:checked');
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
  
    if (gender.length === 0) {
      alert("Please select a gender");
      return;
    }
  
    const popupContent = `
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Date of Birth:</strong> ${dob}</p>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>Gender:</strong> ${Array.from(gender).map(g => g.value).join(', ')}</p>
      <p><strong>Profession:</strong> ${profession}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile Number:</strong> ${mobile}</p>
    `;
  
    document.getElementById('popupContent').innerHTML = popupContent;
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
  
    document.getElementById('surveyForm').reset();
  });
  
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
  }
  