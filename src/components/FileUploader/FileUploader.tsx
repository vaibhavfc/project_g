/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {
  FC,
  useRef,
  useState,
} from 'react';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { IconButton } from '@material-ui/core';

import { FileUploaderProps } from './FileUploader.type';

import classes from './FileUploader.module.scss';

import { ProgressIndicator } from '..';

//* IMPORT SVG
// import { ReactComponent as UploadIcon } from './assets/uploadIcon.svg';
// import { ReactComponent as DocumentIcon } from './assets/document.svg';
// import { ReactComponent as ImageIcon } from './assets/image.svg';
// import { ReactComponent as VideoIcon } from './assets/video.svg';

//* IMPORTING SVG AS COMPONENT
import UploadComp from './assets/UploadComp';
import DocumentComp from './assets/DocumentComp';
import ImageComp from './assets/ImageComp';
import VideoComp from './assets/VideoComp';

const FileUploader: FC<FileUploaderProps> = ({
  type = 'pdf',
  value = 0,
}) => {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [fileName, setFileName] = useState('');
  const [fileSize, setFileSize] = useState(0);
  const [convertedFileSize, setConvertedFileSize] = useState(0);
  const [filesizeType, setFilesizeType] = useState('');
  const file = useRef(null);

  const handleSize = (filesize: number): number => {
    if (filesize > 1000 && filesize < 1000000) {
      setFilesizeType('KB');
      setConvertedFileSize(+(filesize / 1000).toFixed(2));
      return +(filesize / 1000).toFixed(2);
    }
    if (filesize > 1000000 && filesize < 1000000000) {
      setFilesizeType('MB');
      setConvertedFileSize(+(filesize / 1000000).toFixed(2));
      return +(filesize / 1000000).toFixed(2);
    }
    if (filesize > 1000000000 && filesize < 1000000000000) {
      setFilesizeType('GB');
      setConvertedFileSize(+(filesize / 1000000000).toFixed(2));
      return +(filesize / 1000000000).toFixed(2);
    }
    setConvertedFileSize(filesize);
    setFilesizeType('bytes');
    return filesize;
  };

  const getFileData = (event) => {
    // console.log(event.target.files[0]);
    setFileName(event.target.files[0].name);
    setFileSize(handleSize(event.target.files[0].size));
    setIsCardVisible(!isCardVisible);
  };

  const inputFileHandle = (fileType: 'pdf' | 'doc' | 'image' | 'video' | 'audio'): string => {
    switch (fileType) {
      case 'pdf':
        return '.pdf';
      case 'image':
        return 'image/*';
      case 'video':
        return 'video/*';
      case 'audio':
        return 'audio/*';
      default:
        return '.doc';
    }
  };

  const handleIcon = (iconType): any => {
    switch (iconType) {
      case 'image':
        return <ImageComp />;
      case 'video':
        return <VideoComp />;
      default:
        return <DocumentComp />;
    }
  };

  const handleUploadSize = (progressValue: number): number => {
    const uploadedSize = (convertedFileSize * (progressValue / 100)).toFixed(2);
    return +uploadedSize;
  };

  return (
    <>
      {
        !isCardVisible ? (
          <div className={classes.main}>
            <input
              ref={file}
              onChange={getFileData}
              accept={inputFileHandle(type)}
              className={classes.fileuploader}
              id="raised-button-file"
              multiple
              type="file"
            />
            <label htmlFor="raised-button-file">
              <div
                className={classes.fileuploaderInput}
              >
                <div className={classes.fileuploaderInputTop}>
                  {/* <UploadIcon /> */}
                  <UploadComp />
                  <p>UPLOAD DOCUMENT</p>
                </div>
                <div className={classes.fileuploaderInputBottom}>
                  <p>Click to browse or drop here to upload</p>
                </div>
              </div>
            </label>
          </div>
        ) : (
          <div className={classes.uploadCard}>
            <div className={classes.uploadCardLeft}>
              <div className={classes.uploadCardLeftIcon}>
                {
                  value === 100 ? (
                    handleIcon(type)
                  ) : (
                    <ProgressIndicator
                      progressIndicatorType="percentage"
                      type="progress"
                      value={value}
                    />
                  )
                }
              </div>
              <div className={classes.titles}>
                <p>{fileName}</p>
                <p>{`${handleUploadSize(value)} ${filesizeType}/${fileSize} ${filesizeType}`}</p>
              </div>
            </div>
            <div className={classes.uploadCardRight}>
              <IconButton
                className={value === 100 ? classes.show : classes.hide}
                disableRipple
                onClick={() => setIsCardVisible(!isCardVisible)}
                classes={{
                  root: classes.uploadCardRightCloseButton,
                }}
              >
                <CloseRoundedIcon />
              </IconButton>
            </div>
          </div>
        )
      }
    </>
  );
};

export default FileUploader;
