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
