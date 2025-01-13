package com.eojin.board.web.controller;

import com.eojin.board.web.service.FileUploadService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
@Slf4j
@RestController
@RequiredArgsConstructor
public class FileUploadController {

    private final Logger LOG = LoggerFactory.getLogger(FileUploadController.class);
    private final FileUploadService fileUploadService;

    @GetMapping("/api/upload/{ymd}")
    public void getUploadFile(@PathVariable String ymd) {
        LOG.debug("ymd:{}", ymd);
        fileUploadService.getFileList(ymd);
    }
}
