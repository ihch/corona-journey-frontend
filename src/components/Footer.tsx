import React from "react";

type FooterProps = {};

const Footer: React.VFC<FooterProps> = () => {
  return (
    <div className="h-20">
      <div className="h-20 sticky bottom-0 left-0 flex justify-center items-center">
        <p className="text-md font-semibold">
          利用データ{" "}
          <a
            className="text-blue-600 hover:underline"
            href="https://corona.go.jp/dashboard/"
            target="_blank"
            rel="noreferrer"
          >
            新型コロナウイルス感染症対策 全国の感染者数 オープンデータ
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
