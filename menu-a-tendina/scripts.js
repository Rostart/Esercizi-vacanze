const menu = document.getElementById('menu');
    const content1 = document.getElementById('content1');
    const content2 = document.getElementById('content2');
    const content3 = document.getElementById('content3');

    function showContent(content) {
      content.classList.remove('hidden');
    }

    function hideContent(content) {
      content.classList.add('hidden');
    }

    function handleMenuChange() {
      hideContent(content1);
      hideContent(content2);
      hideContent(content3);

      const selectedOption = menu.value;
      if (selectedOption === 'option1') {
        showContent(content1);
      } else if (selectedOption === 'option2') {
        showContent(content2);
      } else if (selectedOption === 'option3') {
        showContent(content3);
      }
    }

    menu.addEventListener('change', handleMenuChange);
    
