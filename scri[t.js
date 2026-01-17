        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            this.style.display = 'none';
            document.getElementById('successMsg').classList.remove('d-none');
        });
