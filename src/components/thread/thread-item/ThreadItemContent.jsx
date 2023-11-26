import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

function ThreadItemContent({ thread, customClass }) {
  return (
    <div>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(thread.body) }}
        className={`
          prose
          dark:prose-invert
          ${customClass}
        `}
      />
    </div>
  );
}

ThreadItemContent.propTypes = {
  thread: PropTypes.oneOfType([PropTypes.object]).isRequired,
  customClass: PropTypes.string,
};

ThreadItemContent.defaultProps = {
  customClass: '',
};

export default ThreadItemContent;
