package com.skillance.Service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class EmailNotificationService implements NotificationService {

//    private final MailSender mailSender; // if not configured, wire a NoOp bean

//    @Override
//    public void notifyUserEmail(Long userId, String subject, String body) {
//        try {
//            var msg = new SimpleMailMessage();
//            // In real system, resolve user email via User Service (Feign)
//            msg.setTo("user+" + userId + "@example.com");
//            msg.setFrom("no-reply@example.com");
//            msg.setSubject(subject);
//            msg.setText(body);
//            mailSender.send(msg);
//            log.info("[EMAIL] userId={}, subject={}", userId, subject);
//        } catch (Exception e) {
//            log.warn("[EMAIL-FAKE] userId={}, subject={}, body={}", userId, subject, body);
//        }
//    }

    @Override
    public void notifyInApp(Long userId, String message) {
        // TODO: persist to notifications table or push via WebSocket
        log.info("[IN-APP] userId={}, message={}", userId, message);
    }
}

