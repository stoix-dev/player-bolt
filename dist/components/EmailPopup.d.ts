import React from 'react';
interface EmailPopupProps {
    onSubmit: (email: string) => void;
    onClose: () => void;
}
declare const EmailPopup: React.FC<EmailPopupProps>;
export default EmailPopup;
