import Link from "next/link";

type Props = {
  onClose: () => void;
};

export const Menu = ({ onClose }: Props) => {
  return (
    <ul className="content-menu">
      <li>
        <Link href="/">
          <a
            className="px-2 py-4 uppercase text-button-05 text-primary-wb-white"
            onClick={onClose}
          >
            Home
          </a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a
            className="px-2 py-4 uppercase text-button-05 text-primary-wb-white"
            onClick={onClose}
          >
            About
          </a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a
            className="px-2 py-4 uppercase text-button-05 text-primary-wb-white"
            onClick={onClose}
          >
            Build
          </a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a
            className="px-2 py-4 uppercase text-button-05 text-primary-wb-white"
            onClick={onClose}
          >
            Roadmap
          </a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a
            className="px-2 py-4 uppercase text-button-05 text-primary-wb-white"
            onClick={onClose}
          >
            Why Yumit
          </a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a
            className="px-2 py-4 uppercase text-button-05 text-primary-wb-white"
            onClick={onClose}
          >
            Contact
          </a>
        </Link>
      </li>
    </ul>
  );
};
