// B5:


function makeUser() {
    return {
      name: "David",
      ref: this
    };    
  }
  let user = makeUser();
  
    console.log ( user.ref.name )

// Kết quả trả ra là mảng rỗng, vì this sẽ là đối tượng toàn cục (window trong trình duyệt) chứ không phải là của object nên sẽ không thể ra "David" được.
