import React from "react";
import Link from "next/link";


type ContactButtonProps = {
    label: string;
    href: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ label, href }) => {
    return (
      <Link href={href}>
        <button className="hover:text-white hover:bg-black hover:border-yellow-300 transition-all duration-300 bg-yellow-300 p-2 rounded-[5px] text-black border-2">
          {label}
        </button>
      </Link>
    );
};

export default ContactButton;