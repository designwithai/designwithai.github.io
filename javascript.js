
<script>
  window.addEventListener('load', function() {
    var targetContents = document.querySelectorAll('.target-content');
    var footnotes = document.querySelectorAll('.footnote');

    targetContents.forEach((targetContent) => {
      var footnoteNumber = targetContent.getAttribute('data-footnote');
      var footnote = document.querySelector(`.footnote[data-footnote="${footnoteNumber}"]`);

      if (footnote) {
        var targetHeight = targetContent.offsetHeight;
        footnote.style.height = targetHeight + 'px';
      }
    });
  });

  window.addEventListener('resize', function() {
    var targetContents = document.querySelectorAll('.target-content');
    var footnotes = document.querySelectorAll('.footnote');

    targetContents.forEach((targetContent) => {
      var footnoteNumber = targetContent.getAttribute('data-footnote');
      var footnote = document.querySelector(`.footnote[data-footnote="${footnoteNumber}"]`);

      if (footnote) {
        var targetHeight = targetContent.offsetHeight;
        footnote.style.height = targetHeight + 'px';
      }
    });
  });
</script>
