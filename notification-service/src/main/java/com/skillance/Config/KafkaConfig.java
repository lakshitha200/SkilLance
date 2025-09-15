package com.skillance.Config;


import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.config.TopicBuilder;

import static com.skillance.Config.KafkaTopics.*;

@Configuration
public class KafkaConfig {

    @Bean
    public NewTopic orderEventsTopic() {
        return TopicBuilder.name(ORDER_EVENTS).partitions(3).replicas(1).build();
    }

    @Bean
    public NewTopic paymentEventsTopic() {
        return TopicBuilder.name(PAYMENT_EVENTS).partitions(3).replicas(1).build();
    }

    @Bean
    public NewTopic orderDlt() {
        return TopicBuilder.name(ORDER_EVENTS_DLT).partitions(3).replicas(1).build();
    }

    @Bean
    public NewTopic paymentDlt() {
        return TopicBuilder.name(PAYMENT_EVENTS_DLT).partitions(3).replicas(1).build();
    }
}

