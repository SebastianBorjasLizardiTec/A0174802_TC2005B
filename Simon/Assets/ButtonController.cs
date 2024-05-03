using UnityEngine;
using UnityEngine.UI;

public class ButtonController : MonoBehaviour
{
    public int buttonID;
    private Button button;
    private SimonManager simonManager;

    void Start()
    {
        button = GetComponent<Button>();
        button.onClick.AddListener(OnButtonPressed);

        simonManager = FindObjectOfType<SimonManager>();
        if (simonManager == null)
        {
            Debug.LogError("SimonManager no encontrado en la escena.");
        }
    }

    void OnButtonPressed()
    {
        simonManager.CInput(buttonID);
    }
}
