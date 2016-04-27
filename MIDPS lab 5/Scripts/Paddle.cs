using UnityEngine;
using System.Collections;

public class Paddle : MonoBehaviour
{
    public float paddleSpeed = 1f;

    private Vector3 playerPos = new Vector3(0, -9.5f, 0);
	
	void Update ()
    {
        foreach (var item in Input.touches)
        {
                float xxPos = transform.position.x + (item.position.x > Screen.currentResolution.width / 2 ? paddleSpeed : -1 * paddleSpeed);
                playerPos = new Vector3(Mathf.Clamp(xxPos, -8f, 8f), -9.5f, 0f);
                transform.position = playerPos;
        }
        float xPos = transform.position.x + (Input.GetAxis("Horizontal") * paddleSpeed);
        playerPos = new Vector3(Mathf.Clamp(xPos, -8f, 8f), -9.5f, 0f);
        transform.position = playerPos;
	}
}
