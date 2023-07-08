function hitungTotal() {
      var noInvoice = document.getElementById('no_invoice').value;
      var harga = parseFloat(document.getElementById('harga').value);
      var ppn = parseFloat(document.getElementById('ppn').value);
      var diskon = parseFloat(document.getElementById('diskon').value);
      var biayaAdmin = parseFloat(document.getElementById('biaya_admin').value);
      var periode = document.getElementById('periode').value;
      
      var total = harga + (harga * ppn / 100) - (harga * diskon / 100) + biayaAdmin;
      
      var currentDate = new Date();
      var tanggal = currentDate.toLocaleDateString();
      var jam = currentDate.toLocaleTimeString();
      
      localStorage.setItem('no_invoice', noInvoice);
      localStorage.setItem('harga', harga);
      localStorage.setItem('ppn', ppn);
      localStorage.setItem('diskon', diskon);
      localStorage.setItem('biaya_admin', biayaAdmin);
      localStorage.setItem('total', total.toFixed(0));
      localStorage.setItem('tanggal', tanggal);
      localStorage.setItem('jam', jam);
      localStorage.setItem('periode', periode);
      
      window.location.href = 'struk.html';
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
	
    var noInvoiceElem = document.querySelector('.no-invoice');
    var hargaElem = document.querySelector('.harga');
    var ppnElem = document.querySelector('.ppn');
    var diskonElem = document.querySelector('.diskon');
    var biayaAdminElem = document.querySelector('.biaya-admin');
    var totalElem = document.querySelector('.total-harga');
    var tanggalElem = document.querySelector('.tanggal');
    var jamElem = document.querySelector('.jam');
    var periodeElem = document.querySelector('.periode');
	
    if (noInvoiceElem && hargaElem && ppnElem && diskonElem && biayaAdminElem && totalElem && tanggalElem && jamElem) {
      noInvoiceElem.textContent = noInvoice;
      hargaElem.textContent = harga;
      ppnElem.textContent = ppn;
      diskonElem.textContent = diskon;
      biayaAdminElem.textContent = biayaAdmin;
      totalElem.textContent = total;
      tanggalElem.textContent = tanggal;
      jamElem.textContent = jam;
	  periodeElem.textContent = periode;
    }