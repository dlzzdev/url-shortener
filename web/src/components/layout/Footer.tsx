export const Footer = () => {
  return (
    <footer className="footer relative bg-neutral-900 border-t-2 border-neutral-700">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="text-center py-6 text-neutral-100">
            <p className="text-md font-bold">
              © 2022 - by{" "}
              <a
                href="http://github.com/dlzzdev"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400"
              >
                dlzz1
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
