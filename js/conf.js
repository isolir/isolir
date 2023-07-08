function hitungTotal() {
      var noInvoice = document.getElementById('no_invoice').value;
      var periode = document.getElementById('periode').value;
      var harga = parseFloat(document.getElementById('harga').value);
      var ppn = parseFloat(document.getElementById('ppn').value);
      var diskon = parseFloat(document.getElementById('diskon').value);
      var biayaAdmin = parseFloat(document.getElementById('biaya_admin').value);
      var admin = document.getElementById('admin').value;
      var password = document.getElementById('password').value;
      
      var currentDate = new Date();
      var tanggal = currentDate.toLocaleDateString();
      var jam = currentDate.toLocaleTimeString();
      
      var total;
      var valid = true;
      
      if (noInvoice === "") {
        document.getElementById('no_invoice_error').textContent = "No Invoice harus diisi";
        valid = false;
      } else {
        document.getElementById('no_invoice_error').textContent = "";
      }
      
      if (periode === "") {
        document.getElementById('periode_error').textContent = "Periode harus diisi";
        valid = false;
      } else {
        document.getElementById('periode_error').textContent = "";
      }
      
      if (isNaN(harga) || harga <= 0) {
        document.getElementById('harga_error').textContent = "Harga harus diisi dengan angka yang valid";
        valid = false;
      } else {
        document.getElementById('harga_error').textContent = "";
      }
      
      if (valid) {
        var isPasswordValid = validatePassword(admin, password);
        
        if (isPasswordValid) {
          total = harga + (harga * ppn / 100) - (harga * diskon / 100) + biayaAdmin;
        
          localStorage.setItem('no_invoice', noInvoice);
          localStorage.setItem('harga', harga);
          localStorage.setItem('ppn', ppn);
          localStorage.setItem('diskon', diskon);
          localStorage.setItem('biaya_admin', biayaAdmin);
          localStorage.setItem('total', formatCurrency(total));
          localStorage.setItem('tanggal', tanggal);
          localStorage.setItem('jam', jam);
          localStorage.setItem('periode', periode);
          localStorage.setItem('admin', admin);
        
          window.location.href = 'struk.html';
        } else {
          document.getElementById('password').value = "";
          alert("Password yang Anda masukkan salah.");
        }
      }
    }
    
    function formatCurrency(value) {
      return value.toLocaleString('id-ID');
    }
    
    function validatePassword(admin, password) {
      // Ganti dengan password yang sesuai untuk masing-masing admin
      if (admin === 'admin1' && password === 'KasirHilmi') {
        return true;
      } else if (admin === 'admin2' && password === 'SuperAdmin') {
        return true;
      } else {
        return false;
      }
    }
    
    function clearPassword() {
      var admin = document.getElementById('admin').value;
      
      if (admin === 'admin2') {
        document.getElementById('password').value = "";
      }
    }
	
    var noInvoice = localStorage.getItem('no_invoice');
    var harga = localStorage.getItem('harga');
    var ppn = localStorage.getItem('ppn');
    var diskon = localStorage.getItem('diskon');
    var biayaAdmin = localStorage.getItem('biaya_admin');
    var total = localStorage.getItem('total');
    var tanggal = localStorage.getItem('tanggal');
    var jam = localStorage.getItem('jam');
    var periode = localStorage.getItem('periode');
    var admin = localStorage.getItem('admin');
    
    var noInvoiceElem = document.querySelector('.no-invoice');
    var hargaElem = document.querySelector('.harga');
    var ppnElem = document.querySelector('.ppn');
    var diskonElem = document.querySelector('.diskon');
    var biayaAdminElem = document.querySelector('.biaya-admin');
    var totalElem = document.querySelector('.total-harga');
    var tanggalElem = document.querySelector('.tanggal');
    var jamElem = document.querySelector('.jam');
    var periodeElem = document.querySelector('.periode');
    var adminElem = document.querySelector('.admin');
    
    if (noInvoiceElem && hargaElem && ppnElem && diskonElem && biayaAdminElem && totalElem && tanggalElem && jamElem && periodeElem && adminElem) {
      noInvoiceElem.textContent = noInvoice;
      hargaElem.textContent = harga;
      ppnElem.textContent = ppn;
      diskonElem.textContent = diskon;
      biayaAdminElem.textContent = biayaAdmin;
      totalElem.textContent = total;
      tanggalElem.textContent = tanggal;
      jamElem.textContent = jam;
      periodeElem.textContent = periode;
      adminElem.textContent = admin === 'admin1' ? 'Hilmi' : 'Arief';
    }
